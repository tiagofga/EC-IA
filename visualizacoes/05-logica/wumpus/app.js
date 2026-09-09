const SIZE = 4;
const directions = ["Norte", "Leste", "Sul", "Oeste"];
const worlds = [
  { name: "Clássico", pits: [[3,1],[3,3],[4,4]], wumpus: [1,3], gold: [2,3] },
  { name: "Variação", pits: [[2,4],[3,2],[4,3]], wumpus: [4,1], gold: [1,4] }
];

let state;
const key = (x,y) => `${x},${y}`;
const parseKey = k => k.split(',').map(Number);
const inBounds = (x,y) => x >= 1 && x <= SIZE && y >= 1 && y <= SIZE;
const neighbors = (x,y) => [[x+1,y],[x-1,y],[x,y+1],[x,y-1]].filter(([a,b]) => inBounds(a,b));
const hasPit = (x,y) => state.world.pits.some(([a,b]) => a === x && b === y);
const hasWumpus = (x,y) => Array.isArray(state.world.wumpus) && state.world.wumpus[0] === x && state.world.wumpus[1] === y;
const hasGold = (x,y) => state.world.gold[0] === x && state.world.gold[1] === y && !state.goldCollected;

function perceptsAt(x,y) {
  const adj = neighbors(x,y);
  return {
    breeze: adj.some(([a,b]) => hasPit(a,b)),
    stench: adj.some(([a,b]) => hasWumpus(a,b)),
    glitter: hasGold(x,y),
    bump: state.lastBump,
    scream: state.lastScream
  };
}

function log(arr, text) { arr.push(text); if (arr.length > 120) arr.shift(); }
const tell = s => log(state.kb, s);
const infer = s => log(state.inf, s);
const message = s => log(state.messages, s);
const tellAction = action => tell(`TELL(KB, Action(${action}))`);

function resetState() {
  const source = worlds[Math.floor(Math.random() * worlds.length)];
  state = {
    world: { name: source.name, pits: source.pits.map(p => [...p]), wumpus: [...source.wumpus], gold: [...source.gold] },
    x: 1, y: 1, dir: 1,
    visited: new Set([key(1,1)]), safe: new Set([key(1,1)]),
    noPit: new Set([key(1,1)]), noWumpus: new Set([key(1,1)]),
    possiblePit: new Set(), possibleWumpus: new Set(), perceptHistory: new Map(),
    kb: [], inf: [], messages: [],
    reveal: false, goldCollected: false, alive: true, arrowUsed: false,
    won: false, finished: false, lastBump: false, lastScream: false
  };
  message(`Mundo carregado: ${state.world.name}. O agente inicia em [1,1].`);
  processCurrentCell();
}

function markNoPit(x,y,reason) {
  const k = key(x,y);
  if (!state.noPit.has(k)) { state.noPit.add(k); state.possiblePit.delete(k); infer(`⊢ ¬P${x},${y} (${reason})`); }
}
function markNoWumpus(x,y,reason) {
  const k = key(x,y);
  if (!state.noWumpus.has(k)) { state.noWumpus.add(k); state.possibleWumpus.delete(k); infer(`⊢ ¬W${x},${y} (${reason})`); }
}
function markSafe(x,y) {
  const k = key(x,y);
  if (!state.safe.has(k)) { state.safe.add(k); infer(`⊢ Safe${x},${y} (sem poço e sem Wumpus)`); }
}
function markPossiblePit(x,y,reason) {
  const k = key(x,y);
  if (!state.noPit.has(k) && !state.safe.has(k) && !state.visited.has(k) && !state.possiblePit.has(k)) {
    state.possiblePit.add(k); infer(`⊢ P?${x},${y} (${reason})`);
  }
}
function markPossibleWumpus(x,y,reason) {
  const k = key(x,y);
  if (!state.noWumpus.has(k) && !state.safe.has(k) && !state.visited.has(k) && !state.possibleWumpus.has(k)) {
    state.possibleWumpus.add(k); infer(`⊢ W?${x},${y} (${reason})`);
  }
}

function finishGame(won, text) {
  state.finished = true;
  state.won = won;
  if (!won) state.alive = false;
  message(text);
}

function processCurrentCell() {
  const {x,y} = state;
  const p = perceptsAt(x,y);
  state.perceptHistory.set(key(x,y), { ...p });

  tell(`TELL(KB, At(${x},${y}))`);
  tell(`TELL(KB, ${p.breeze ? '' : '¬'}B${x},${y})`);
  tell(`TELL(KB, ${p.stench ? '' : '¬'}S${x},${y})`);
  tell(`TELL(KB, ${p.glitter ? '' : '¬'}G${x},${y})`);
  if (p.bump) tell('TELL(KB, Bump)');
  if (p.scream) tell('TELL(KB, Scream)');

  const adj = neighbors(x,y);
  if (!p.breeze) adj.forEach(([a,b]) => markNoPit(a,b, `sem brisa em [${x},${y}]`));
  else adj.forEach(([a,b]) => markPossiblePit(a,b, `há brisa em [${x},${y}]`));
  if (!p.stench) adj.forEach(([a,b]) => markNoWumpus(a,b, `sem fedor em [${x},${y}]`));
  else adj.forEach(([a,b]) => markPossibleWumpus(a,b, `há fedor em [${x},${y}]`));

  for (const k of state.noPit) {
    if (state.noWumpus.has(k)) { const [a,b] = parseKey(k); markSafe(a,b); }
  }

  if (hasPit(x,y)) finishGame(false, `Fim de jogo: o agente caiu em um poço em [${x},${y}].`);
  else if (hasWumpus(x,y)) finishGame(false, `Fim de jogo: o agente encontrou o Wumpus em [${x},${y}].`);
  else if (state.goldCollected && x === 1 && y === 1 && state.visited.size > 1) {
    tellAction('Climb');
    finishGame(true, 'Fim de jogo: o agente retornou à casa [1,1] com o ouro. Objetivo alcançado.');
  }

  updateUI();
}

function askSuggestedAction() {
  if (state.finished) return state.won ? 'ASK(KB, resultado?) -> objetivo alcançado' : 'ASK(KB, resultado?) -> exploração encerrada';
  if (hasGold(state.x,state.y)) return 'ASK(KB, próxima ação?) -> pegar o ouro';
  const adj = neighbors(state.x,state.y);
  const safeUnvisited = adj.filter(([a,b]) => state.safe.has(key(a,b)) && !state.visited.has(key(a,b)));
  if (safeUnvisited.length) {
    const [a,b] = safeUnvisited[0];
    return `ASK(KB, próxima ação?) -> explorar casa segura [${a},${b}]`;
  }
  if (state.goldCollected) return 'ASK(KB, próxima ação?) -> retornar à casa inicial [1,1]';
  const unknown = adj.filter(([a,b]) => !state.safe.has(key(a,b)) && !state.visited.has(key(a,b)));
  if (unknown.length) {
    const [a,b] = unknown[0];
    return `ASK(KB, próxima ação?) -> não há casa segura nova; considerar [${a},${b}] com cautela`;
  }
  return 'ASK(KB, próxima ação?) -> reavaliar a KB e retornar por casas conhecidas';
}

function arrowChar() { return ['↑','→','↓','←'][state.dir]; }
function resultText() {
  if (state.won) return 'sucesso';
  if (state.finished) return 'fim de jogo';
  return 'em andamento';
}
function perceptIcons(p) {
  if (!p) return '';
  const icons = [];
  if (p.breeze) icons.push('<span title="Brisa">🌬️</span>');
  if (p.stench) icons.push('<span title="Fedor">☁️</span>');
  if (p.glitter) icons.push('<span title="Brilho">✨</span>');
  return icons.join('');
}

function updateControls() {
  const disabled = state.finished;
  ['turnLeftBtn','forwardBtn','turnRightBtn','shootBtn','grabBtn','exitBtn'].forEach(id => {
    document.getElementById(id).disabled = disabled;
  });
}

function updateResultBanner() {
  const banner = document.getElementById('gameResult');
  if (!state.finished) { banner.hidden = true; return; }
  banner.hidden = false;
  banner.className = `game-result ${state.won ? 'success' : 'failure'}`;
  banner.innerHTML = state.won
    ? '<strong>Objetivo alcançado.</strong> O agente encontrou o ouro e retornou à casa inicial. Use “Novo mundo” para jogar novamente.'
    : '<strong>Fim de jogo.</strong> O agente não concluiu a missão. Use “Novo mundo” para tentar novamente.';
}

function updateUI() {
  const board = document.getElementById('board');
  board.innerHTML = '';
  for (let y = SIZE; y >= 1; y--) {
    for (let x = 1; x <= SIZE; x++) {
      const k = key(x,y), cell = document.createElement('div');
      const knownPercepts = state.perceptHistory.get(k);
      cell.className = 'cell';
      if (state.visited.has(k)) cell.classList.add('visited');
      if (state.safe.has(k)) cell.classList.add('safe');
      if (state.possiblePit.has(k) || state.possibleWumpus.has(k)) cell.classList.add('hazardHint');
      if (state.reveal && (hasPit(x,y) || hasWumpus(x,y))) cell.classList.add('revealedHazard');
      if (knownPercepts?.breeze) cell.classList.add('breeze');
      if (knownPercepts?.stench) cell.classList.add('stench');
      if (state.x === x && state.y === y) cell.classList.add('current');

      const labels = [];
      if (state.safe.has(k)) labels.push('✓');
      if (state.possiblePit.has(k)) labels.push('P?');
      if (state.possibleWumpus.has(k)) labels.push('W?');
      if (state.reveal && hasPit(x,y)) labels.push('Poço');
      if (state.reveal && hasWumpus(x,y)) labels.push('Wumpus');
      if (state.reveal && hasGold(x,y)) labels.push('★');

      cell.innerHTML = `<div class="coord">[${x},${y}]</div><div class="percept-icons">${perceptIcons(knownPercepts)}</div><div class="agent">${state.x===x && state.y===y ? arrowChar() : ''}</div><div class="marks">${labels.join(' ')}</div>`;
      board.appendChild(cell);
    }
  }

  const p = perceptsAt(state.x,state.y);
  document.getElementById('modeLabel').textContent = state.reveal ? 'Professor' : 'Aluno';
  document.getElementById('orientationLabel').textContent = directions[state.dir];
  document.getElementById('status').innerHTML = `Posição atual: <b>[${state.x},${state.y}]</b><br>Mundo: <b>${state.world.name}</b><br>Flecha disponível: <b>${state.arrowUsed ? 'não' : 'sim'}</b><br>Ouro coletado: <b>${state.goldCollected ? 'sim' : 'não'}</b><br>Agente ativo: <b>${state.alive && !state.finished ? 'sim' : 'não'}</b><br>Resultado: <b>${resultText()}</b>`;
  document.getElementById('percepts').innerHTML = [
    `🌬️ Brisa: ${p.breeze?'sim':'não'}`, `☁️ Fedor: ${p.stench?'sim':'não'}`, `✨ Brilho: ${p.glitter?'sim':'não'}`,
    `🧱 Colisão: ${p.bump?'sim':'não'}`, `📣 Grito: ${p.scream?'sim':'não'}`
  ].map(v => `<li>${v}</li>`).join('');
  document.getElementById('kbLog').textContent = state.kb.join('\n');
  document.getElementById('inferenceLog').textContent = state.inf.join('\n');
  document.getElementById('askResult').textContent = askSuggestedAction();
  document.getElementById('messageLog').textContent = state.messages.join('\n');
  updateControls();
  updateResultBanner();
}

function canAct() { return state.alive && !state.finished; }
function clearMomentaryPercepts() { state.lastBump = false; state.lastScream = false; }
function turnLeft() { if (!canAct()) return; clearMomentaryPercepts(); state.dir=(state.dir+3)%4; tellAction('TurnLeft'); message(`Ação: girar à esquerda. ${directions[state.dir]}.`); updateUI(); }
function turnRight() { if (!canAct()) return; clearMomentaryPercepts(); state.dir=(state.dir+1)%4; tellAction('TurnRight'); message(`Ação: girar à direita. ${directions[state.dir]}.`); updateUI(); }
function forward() {
  if (!canAct()) return;
  clearMomentaryPercepts(); tellAction('Forward');
  let nx=state.x, ny=state.y;
  if (state.dir===0) ny++; if (state.dir===1) nx++; if (state.dir===2) ny--; if (state.dir===3) nx--;
  if (!inBounds(nx,ny)) { state.lastBump=true; tell('TELL(KB, Bump)'); message('Ação: avançar. Colisão com a parede.'); updateUI(); return; }
  state.x=nx; state.y=ny; state.visited.add(key(nx,ny)); message(`Ação: avançar para [${nx},${ny}].`); processCurrentCell();
}
function shoot() {
  if (!canAct()) return;
  clearMomentaryPercepts();
  if (state.arrowUsed) { message('A flecha já foi utilizada.'); updateUI(); return; }
  state.arrowUsed=true; tellAction('Shoot');
  let x=state.x, y=state.y;
  while (true) {
    if (state.dir===0) y++; if (state.dir===1) x++; if (state.dir===2) y--; if (state.dir===3) x--;
    if (!inBounds(x,y)) break;
    if (hasWumpus(x,y)) {
      state.world.wumpus=null; state.lastScream=true; tell('TELL(KB, Scream)'); infer(`⊢ ¬W${x},${y} (grito após o tiro)`);
      message(`Ação: atirar. O Wumpus foi atingido no alinhamento de [${x},${y}].`); updateUI(); return;
    }
  }
  message('Ação: atirar. Nenhum grito foi ouvido.'); updateUI();
}
function grab() {
  if (!canAct()) return;
  clearMomentaryPercepts(); tellAction('Grab');
  if (hasGold(state.x,state.y)) { state.goldCollected=true; tell('TELL(KB, HasGold)'); message(`Ação: pegar o ouro em [${state.x},${state.y}]. Agora retorne a [1,1].`); }
  else message('Não há ouro na casa atual.');
  updateUI();
}
function exitCave() {
  if (!canAct()) return;
  clearMomentaryPercepts(); tellAction('Climb');
  if (state.x !== 1 || state.y !== 1) { message('A saída só está disponível na casa inicial [1,1].'); updateUI(); return; }
  finishGame(state.goldCollected, state.goldCollected ? 'Fim de jogo: o agente saiu com o ouro.' : 'Fim de jogo: o agente saiu sem o ouro.');
  updateUI();
}
function toggleReveal() { state.reveal=!state.reveal; updateUI(); }

document.getElementById('turnLeftBtn').addEventListener('click', turnLeft);
document.getElementById('turnRightBtn').addEventListener('click', turnRight);
document.getElementById('forwardBtn').addEventListener('click', forward);
document.getElementById('shootBtn').addEventListener('click', shoot);
document.getElementById('grabBtn').addEventListener('click', grab);
document.getElementById('exitBtn').addEventListener('click', exitCave);
document.getElementById('toggleRevealBtn').addEventListener('click', toggleReveal);
document.getElementById('restartBtn').addEventListener('click', resetState);

resetState();
