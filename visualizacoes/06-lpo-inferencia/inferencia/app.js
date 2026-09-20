const flows={
direto:[
["Partir dos fatos conhecidos","KB: Humano(Socrates), Humano(Platao)"],
["Aplicar Humano(x) → Mortal(x)","θ={x/Socrates} ⇒ Mortal(Socrates)"],
["Aplicar Humano(x) → Mortal(x)","θ={x/Platao} ⇒ Mortal(Platao)"],
["Aplicar Mortal(x) → PrecisaRespirar(x)","θ={x/Socrates} ⇒ PrecisaRespirar(Socrates)"],
["Consulta satisfeita","PrecisaRespirar(Socrates) foi derivado"]
],
reverso:[
["Começar pela meta","Meta: PrecisaRespirar(Socrates)"],
["Buscar regra que conclua PrecisaRespirar(x)","Unificar x com Socrates"],
["Nova submeta","Mortal(Socrates)"],
["Buscar regra que conclua Mortal(x)","Unificar x com Socrates"],
["Nova submeta","Humano(Socrates)"],
["Fato encontrado na KB","Prova concluída"]
]};
let mode="direto",i=0;const trace=document.querySelector("#trace"),state=document.querySelector("#state"),label=document.querySelector("#mode");
function reset(){i=0;trace.innerHTML="";state.textContent="";label.textContent=mode==="direto"?"Orientado pelos dados":"Orientado pela meta"}
function next(){const f=flows[mode];if(i>=f.length)return;const li=document.createElement("li");li.textContent=f[i][0];trace.appendChild(li);state.textContent=f[i][1];i++}
document.querySelectorAll("[data-mode]").forEach(b=>b.onclick=()=>{mode=b.dataset.mode;reset()});document.querySelector("#next").onclick=next;document.querySelector("#reset").onclick=reset;reset();