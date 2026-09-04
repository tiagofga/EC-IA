let graphData;
let traces;
let algorithm = "bfs";
let step = 0;

const $ = (id) => document.getElementById(id);

async function loadData() {
  const [graph, baseTraces, extraTraces] = await Promise.all([
    fetch("data/grafo.json").then(checkResponse).then(r => r.json()),
    fetch("data/traces.json").then(checkResponse).then(r => r.json()),
    fetch("data/extra-traces.json").then(checkResponse).then(r => r.json())
  ]);

  graphData = graph;
  traces = { ...baseTraces, ...extraTraces };
  bind();
  render();
}

function checkResponse(response) {
  if (!response.ok) throw new Error(`Falha ao carregar ${response.url}`);
  return response;
}

function bind() {
  $("algorithm").addEventListener("change", (event) => {
    algorithm = event.target.value;
    step = 0;
    render();
  });

  $("prev").addEventListener("click", () => {
    step = Math.max(0, step - 1);
    render();
  });

  $("next").addEventListener("click", () => {
    step = Math.min(traces[algorithm].steps.length - 1, step + 1);
    render();
  });

  $("reset").addEventListener("click", () => {
    step = 0;
    render();
  });
}

function svgEl(name, attrs = {}) {
  const el = document.createElementNS("http://www.w3.org/2000/svg", name);
  for (const [key, value] of Object.entries(attrs)) el.setAttribute(key, value);
  return el;
}

function arrayify(value) {
  if (value == null) return [];
  return Array.isArray(value) ? value : [value];
}

function renderGraph(state) {
  const svg = $("graph");
  svg.innerHTML = "";

  const nodeById = Object.fromEntries(graphData.nodes.map(node => [node.id, node]));
  const solution = state.solution || [];
  const current = arrayify(state.current);
  const beam = state.beam || [];

  function isSolutionEdge(a, b) {
    for (let i = 0; i < solution.length - 1; i++) {
      if (
        (solution[i] === a && solution[i + 1] === b) ||
        (solution[i] === b && solution[i + 1] === a)
      ) return true;
    }
    return false;
  }

  for (const edge of graphData.edges) {
    const a = nodeById[edge.from];
    const b = nodeById[edge.to];

    const line = svgEl("line", {
      x1: a.x, y1: a.y, x2: b.x, y2: b.y,
      class: "edge" + (isSolutionEdge(edge.from, edge.to) ? " solution-edge" : "")
    });
    svg.appendChild(line);

    const label = svgEl("text", {
      x: (a.x + b.x) / 2,
      y: (a.y + b.y) / 2 - 8,
      "text-anchor": "middle",
      class: "edge-label"
    });
    label.textContent = edge.cost;
    svg.appendChild(label);
  }

  for (const node of graphData.nodes) {
    const classes = ["node"];

    if ((state.explored || []).includes(node.id)) classes.push("explored");
    if ((state.frontier || []).includes(node.id)) classes.push("frontier");
    if (beam.includes(node.id)) classes.push("beam");
    if ((state.solution || []).includes(node.id)) classes.push("solution");
    if (current.includes(node.id)) classes.push("current");

    const group = svgEl("g", {
      class: classes.join(" "),
      transform: `translate(${node.x} ${node.y})`
    });

    const circle = svgEl("circle", { r: 30, cx: 0, cy: 0 });
    const main = svgEl("text", {
      x: 0, y: 7, "text-anchor": "middle", class: "main"
    });
    main.textContent = node.label;

    const heuristic = svgEl("text", {
      x: 0, y: 50, "text-anchor": "middle", class: "h"
    });
    heuristic.textContent = `h=${node.h}`;

    group.append(circle, main, heuristic);
    svg.appendChild(group);
  }
}

function renderBoard(target, board) {
  target.innerHTML = "";
  if (!board) return;

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const cell = document.createElement("div");
      cell.className = `square ${(row + col) % 2 === 0 ? "light" : "dark"}`;

      if (board[col] === row) {
        const queen = document.createElement("span");
        queen.className = "queen";
        queen.textContent = "♛";
        queen.setAttribute("aria-label", `Rainha na coluna ${col + 1}, linha ${row + 1}`);
        cell.appendChild(queen);
      }

      target.appendChild(cell);
    }
  }
}

function renderQueens(state) {
  renderBoard($("queen-current"), state.board);
  $("queen-current-label").textContent =
    `Configuração: [${(state.board || []).map(value => value + 1).join(", ")}] · h=${state.conflicts}`;

  const panel = $("candidate-panel");
  panel.classList.remove("hidden", "accepted", "rejected");

  if (state.candidate) {
    renderBoard($("queen-candidate"), state.candidate);
    $("queen-candidate-label").textContent =
      `Configuração: [${state.candidate.map(value => value + 1).join(", ")}] · h=${state.candidate_conflicts}`;

    if (typeof state.accepted === "boolean") {
      panel.classList.add(state.accepted ? "accepted" : "rejected");
    }
  } else {
    panel.classList.add("hidden");
  }
}

function renderPopulation(state) {
  const population = $("population");
  population.innerHTML = "";

  for (const [index, individual] of (state.population || []).entries()) {
    const card = document.createElement("section");
    card.className = "individual" + (index === 0 ? " best" : "");

    const title = document.createElement("h3");
    title.textContent = index === 0 ? "Melhor indivíduo" : `Indivíduo ${index + 1}`;

    const board = document.createElement("div");
    board.className = "chessboard mini";
    renderBoard(board, individual.state);

    const caption = document.createElement("p");
    caption.className = "board-caption";
    caption.textContent = `h=${individual.conflicts}`;

    card.append(title, board, caption);
    population.appendChild(card);
  }
}

function addDetail(term, value) {
  if (value == null || value === "" || (Array.isArray(value) && !value.length)) return;

  const dt = document.createElement("dt");
  const dd = document.createElement("dd");
  dt.textContent = term;
  dd.textContent = Array.isArray(value) ? value.join(" → ") : String(value);
  $("state-details").append(dt, dd);
}

function renderDetails(trace, state) {
  $("state-details").innerHTML = "";

  if ((trace.view || "graph") === "graph") {
    addDetail("Nó atual", state.current || "-");
    if (state.beam) addDetail("Feixe", state.beam);
    addDetail("Fronteira", state.frontier || []);
    addDetail("Explorados", state.explored || []);
    addDetail("Caminho", state.path || []);
  } else if (trace.view === "queens") {
    addDetail("Estado", (state.board || []).map(value => value + 1));
    addDetail("Objetivo", `h=${state.conflicts}`);
    if (state.candidate) {
      addDetail("Vizinho", state.candidate.map(value => value + 1));
    }
  } else if (trace.view === "population") {
    addDetail("Geração", state.generation);
    addDetail("Melhor estado", (state.best || []).map(value => value + 1));
    addDetail("Objetivo", `h=${state.best_conflicts}`);
  }

  for (const [term, value] of Object.entries(state.metrics || {})) {
    addDetail(term, value);
  }
}

function renderScores(state) {
  const scores = $("scores");
  scores.innerHTML = "";
  const entries = Object.entries(state.scores || {});

  $("scores-wrap").style.display = entries.length ? "block" : "none";

  for (const [node, value] of entries) {
    const div = document.createElement("div");
    div.className = "score";
    div.textContent = `${node}: ${value}`;
    scores.appendChild(div);
  }
}

function setView(view) {
  for (const id of ["graph-view", "queens-view", "population-view"]) {
    $(id).classList.add("hidden");
  }

  const target =
    view === "queens" ? "queens-view" :
    view === "population" ? "population-view" :
    "graph-view";

  $(target).classList.remove("hidden");
}

function render() {
  const trace = traces[algorithm];
  const state = trace.steps[step];
  const view = trace.view || "graph";

  $("family").textContent = trace.family;
  $("algorithm-name").textContent = trace.name;
  $("rule").textContent = trace.rule;
  $("focus").textContent = trace.focus || defaultFocus(trace.family);
  $("step-counter").textContent = `Passo ${step + 1} de ${trace.steps.length}`;
  $("note").textContent = state.note || "";

  setView(view);
  renderDetails(trace, state);
  renderScores(state);

  if (view === "graph") renderGraph(state);
  if (view === "queens") renderQueens(state);
  if (view === "population") renderPopulation(state);

  $("prev").disabled = step === 0;
  $("next").disabled = step === trace.steps.length - 1;
}

function defaultFocus(family) {
  if (family === "Busca não informada") {
    return "Compare a ordem de expansão, o comportamento da fronteira e o caminho produzido sem informação heurística.";
  }
  return "Compare os valores registrados no trace com a ordem em que os estados se tornam mais promissores.";
}

loadData().catch(error => {
  console.error(error);
  document.body.insertAdjacentHTML(
    "beforeend",
    "<p class='load-error'>Não foi possível carregar os traces. Execute a visualização por um servidor HTTP local.</p>"
  );
});
