const data=[
{label:"Sucesso simples",a:"Humano(x)",b:"Humano(Socrates)",steps:["Predicados iguais: Humano/1","Comparar x com Socrates","Associar x → Socrates","Unificação concluída"],subs:["{}","{}","{x/Socrates}","{x/Socrates}"]},
{label:"Duas variáveis",a:"Conhece(x,Ada)",b:"Conhece(Tiago,y)",steps:["Predicados iguais: Conhece/2","Comparar x com Tiago","Associar x → Tiago","Comparar Ada com y","Associar y → Ada","MGU encontrado"],subs:["{}","{}","{x/Tiago}","{x/Tiago}","{x/Tiago,y/Ada}","{x/Tiago,y/Ada}"]},
{label:"Falha por constantes",a:"Conhece(x,Ada)",b:"Conhece(Tiago,Turing)",steps:["Predicados iguais: Conhece/2","Comparar x com Tiago","Associar x → Tiago","Comparar Ada com Turing","Falha: constantes distintas"],subs:["{}","{}","{x/Tiago}","{x/Tiago}","FALHA"]}
];
const ex=document.querySelector("#ex"),pair=document.querySelector("#pair"),trace=document.querySelector("#trace"),subst=document.querySelector("#subst");let i=0,current=0;
data.forEach((d,j)=>{const o=document.createElement("option");o.value=j;o.textContent=d.label;ex.appendChild(o)});
function reset(){current=Number(ex.value);i=0;trace.innerHTML="";pair.textContent=data[current].a+"  ⇔  "+data[current].b;subst.textContent="{ }"}
function next(){const d=data[current];if(i>=d.steps.length)return;const li=document.createElement("li");li.textContent=d.steps[i];trace.appendChild(li);subst.textContent=d.subs[i];i++}
ex.onchange=reset;document.querySelector("#next").onclick=next;document.querySelector("#reset").onclick=reset;reset();