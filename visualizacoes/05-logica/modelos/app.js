const examples=[
{
label:"Consequência: {P → Q, P} ⊨ Q",
symbols:["P","Q"],
kb:"P → Q\nP",
query:"Q",
explanation:"A consulta é consequência lógica porque Q é verdadeira em todos os modelos que satisfazem a KB.",
evalKB:r=>(!r.P||r.Q)&&r.P,
evalQ:r=>r.Q
},
{
label:"Contraexemplo: {P ∨ Q} ⊭ P",
symbols:["P","Q"],
kb:"P ∨ Q",
query:"P",
explanation:"Basta existir um modelo da KB em que P seja falsa para mostrar que P não é consequência lógica.",
evalKB:r=>r.P||r.Q,
evalQ:r=>r.P
},
{
label:"Validade: P ∨ ¬P",
symbols:["P"],
kb:"⊤",
query:"P ∨ ¬P",
explanation:"Uma fórmula válida é verdadeira em todos os mundos possíveis.",
evalKB:r=>true,
evalQ:r=>r.P||!r.P
},
{
label:"Insatisfatibilidade: P ∧ ¬P",
symbols:["P"],
kb:"⊤",
query:"P ∧ ¬P",
explanation:"Uma fórmula insatisfatível não é verdadeira em nenhum mundo possível.",
evalKB:r=>true,
evalQ:r=>r.P&&!r.P
}
];
const sel=document.querySelector("#example"),kb=document.querySelector("#kb"),query=document.querySelector("#query"),thead=document.querySelector("#thead"),tbody=document.querySelector("#tbody"),verdict=document.querySelector("#verdict"),explanation=document.querySelector("#explanation");
examples.forEach((e,i)=>{const o=document.createElement("option");o.value=i;o.textContent=e.label;sel.appendChild(o)});
function worlds(symbols){const out=[];for(let mask=0;mask<2**symbols.length;mask++){const r={};symbols.forEach((s,i)=>r[s]=Boolean(mask&(1<<(symbols.length-i-1))));out.push(r)}return out}
function render(e,withEvaluation=false){kb.textContent=e.kb;query.textContent=e.query;explanation.textContent=e.explanation;thead.innerHTML="<tr>"+e.symbols.map(s=>"<th>"+s+"</th>").join("")+"<th>KB</th><th>α</th><th>Leitura</th></tr>";tbody.innerHTML="";let models=0,counters=0;worlds(e.symbols).forEach(r=>{const k=e.evalKB(r),q=e.evalQ(r);if(k)models++;if(k&&!q)counters++;const tr=document.createElement("tr");if(withEvaluation&&k&&!q)tr.className="counter";else if(withEvaluation&&k)tr.className="model";tr.innerHTML=e.symbols.map(s=>"<td>"+(r[s]?"V":"F")+"</td>").join("")+"<td>"+(k?"V":"F")+"</td><td>"+(q?"V":"F")+"</td><td>"+(withEvaluation?(k&&!q?"contraexemplo":k?"modelo da KB":"fora da KB"):"—")+"</td>";tbody.appendChild(tr)});if(!withEvaluation){verdict.textContent="Avalie os mundos possíveis.";verdict.className="verdict neutral";return}const entails=models>0&&counters===0;verdict.textContent=entails?"KB ⊨ α":"KB ⊭ α";verdict.className="verdict "+(entails?"success":"failure")}
function load(){render(examples[Number(sel.value)],false)}
sel.onchange=load;document.querySelector("#evaluate").onclick=()=>render(examples[Number(sel.value)],true);document.querySelector("#reset").onclick=load;load();