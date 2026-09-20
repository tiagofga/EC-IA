const examples=[
{label:"Sucesso simples",left:"Knows(John, x)",right:"Knows(John, Jane)",steps:[
["Predicados e aridade compatíveis: Knows/2","{}","neutral"],
["Primeiro argumento: John = John","{}","neutral"],
["Segundo argumento: x deve corresponder a Jane","{x/Jane}","warning"],
["UMG encontrado","{x/Jane}","success"]
]},
{label:"Duas variáveis",left:"Knows(John, x)",right:"Knows(y, Bill)",steps:[
["Predicados e aridade compatíveis: Knows/2","{}","neutral"],
["Unificar John com y","{y/John}","warning"],
["Unificar x com Bill","{y/John, x/Bill}","warning"],
["UMG encontrado","{y/John, x/Bill}","success"]
]},
{label:"Falha por constante",left:"Knows(John, x)",right:"Knows(x, Elizabeth)",steps:[
["Predicados e aridade compatíveis: Knows/2","{}","neutral"],
["Primeiro argumento exige x = John","{x/John}","warning"],
["Segundo argumento exige John = Elizabeth","{x/John}","warning"],
["Falha: constantes distintas não podem ser igualadas","FALHA","failure"]
]},
{label:"Teste de ocorrência",left:"P(x)",right:"P(f(x))",steps:[
["Predicados e aridade compatíveis: P/1","{}","neutral"],
["Comparar x com f(x)","{}","warning"],
["x ocorre dentro do termo f(x)","{}","warning"],
["Falha no occurs check: não permitir x = f(x)","FALHA","failure"]
]}
];
const ex=document.querySelector("#ex"),left=document.querySelector("#left"),right=document.querySelector("#right"),trace=document.querySelector("#trace"),subst=document.querySelector("#subst"),status=document.querySelector("#status");
let current=0,step=0;
examples.forEach((d,i)=>{const o=document.createElement("option");o.value=i;o.textContent=d.label;ex.appendChild(o)});
function load(){current=Number(ex.value);step=0;trace.innerHTML="";left.textContent=examples[current].left;right.textContent=examples[current].right;subst.textContent="{ }";status.textContent="Aguardando o primeiro passo.";status.className="status neutral"}
function next(){const d=examples[current];if(step>=d.steps.length)return;const [msg,s,kind]=d.steps[step];const li=document.createElement("li");li.textContent=msg;trace.appendChild(li);subst.textContent=s;status.textContent=kind==="success"?"Unificação concluída.":kind==="failure"?"Unificação falhou.":"Processando compatibilidade...";status.className="status "+kind;step++}
ex.addEventListener("change",load);document.querySelector("#next").addEventListener("click",next);document.querySelector("#reset").addEventListener("click",load);load();