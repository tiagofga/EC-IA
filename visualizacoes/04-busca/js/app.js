let graphData;
let traces;
let algorithm = "bfs";
let step = 0;

const $ = (id) => document.getElementById(id);

async function loadData() {
  [graphData, traces] = await Promise.all([
    fetch("data/grafo.json").then(r => r.json()),
    fetch("data/traces.json").then(r => r.json())
  ]);
  bind();
  render();
}

function bind() {
  $("algorithm").addEventListener("change", (e) => {
    algorithm = e.target.value;
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

function renderGraph(state) {
  const svg = $("graph");
  svg.innerHTML = "";
  const nodeById = Object.fromEntries(graphData.nodes.map(n => [n.id, n]));
  const solution = state.solution || [];

  function isSolutionEdge(a, b) {
    for (let i = 0; i < solution.length - 1; i++) {
      if ((solution[i] === a && solution[i+1] === b) ||
          (solution[i] === b && solution[i+1] === a)) return true;
    }
    return false;
  }

  for (const e of graphData.edges) {
    const a = nodeById[e.from], b = nodeById[e.to];
    const line = svgEl("line", {
      x1:a.x, y1:a.y, x2:b.x, y2:b.y,
      class: "edge" + (isSolutionEdge(e.from,e.to) ? " solution-edge" : "")
    });
    svg.appendChild(line);

    const label = svgEl("text", {
      x:(a.x+b.x)/2, y:(a.y+b.y)/2 - 8, "text-anchor":"middle", class:"edge-label"
    });
    label.textContent = e.cost;
    svg.appendChild(label);
  }

  for (const n of graphData.nodes) {
    const classes = ["node"];
    if ((state.explored || []).includes(n.id)) classes.push("explored");
    if ((state.frontier || []).includes(n.id)) classes.push("frontier");
    if ((state.solution || []).includes(n.id)) classes.push("solution");
    if (state.current === n.id) classes.push("current");

    const g = svgEl("g", {class: classes.join(" "), transform:`translate(${n.x} ${n.y})`});
    const circle = svgEl("circle", {r:30, cx:0, cy:0});
    const main = svgEl("text", {x:0, y:7, "text-anchor":"middle", class:"main"});
    main.textContent = n.label;
    const h = svgEl("text", {x:0, y:50, "text-anchor":"middle", class:"h"});
    h.textContent = `h=${n.h}`;
    g.append(circle, main, h);
    svg.appendChild(g);
  }
}

function render() {
  const trace = traces[algorithm];
  const state = trace.steps[step];

  $("family").textContent = trace.family;
  $("algorithm-name").textContent = trace.name;
  $("rule").textContent = trace.rule;
  $("step-counter").textContent = `Passo ${step + 1} de ${trace.steps.length}`;
  $("current").textContent = state.current || "—";
  $("frontier").textContent = (state.frontier || []).join(" → ") || "∅";
  $("explored").textContent = (state.explored || []).join(", ") || "∅";
  $("path").textContent = (state.path || []).join(" → ") || "—";
  $("note").textContent = state.note || "";

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

  $("prev").disabled = step === 0;
  $("next").disabled = step === trace.steps.length - 1;

  renderGraph(state);
}

loadData().catch(err => {
  console.error(err);
  document.body.insertAdjacentHTML("beforeend",
    "<p style='padding:20px'>Não foi possível carregar os traces. Execute a visualização por um servidor HTTP local.</p>");
});
