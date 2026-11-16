const examples=[
{
label:"Provar Q a partir de P → Q e P",
kb:"P → Q\nP",
query:"Q",
steps:[
["Negar a consulta","Adicionar ¬Q à KB."],
["Converter para FNC","Cláusulas: (¬P ∨ Q), P, ¬Q."],
["Resolver (¬P ∨ Q) com ¬Q","Resolvente: ¬P."],
["Resolver ¬P com P","Resolvente: □."],
["Conclusão","A cláusula vazia foi derivada; portanto KB ⊨ Q."]
],
success:true
},
{
label:"Tentar provar P a partir de P ∨ Q",
kb:"P ∨ Q",
query:"P",
steps:[
["Negar a consulta","Adicionar ¬P à KB."],
["FNC","Cláusulas: (P ∨ Q), ¬P."],
["Resolver","Resolvente: Q."],
["Buscar novos pares","Nenhum novo resolvente leva à cláusula vazia."],
["Conclusão","A refutação não fecha; há modelo da KB em que P é falsa."]
],
success:false
}
];
const sel=document.querySelector("#example"),kb=document.querySelector("#kb"),query=document.querySelector("#query"),trace=document.querySelector("#trace"),status=document.querySelector("#status"),current=document.querySelector("#current");let i=0;
examples.forEach((e,j)=>{const o=document.createElement("option");o.value=j;o.textContent=e.label;sel.appendChild(o)});
function load(){i=0;trace.innerHTML="";const e=examples[Number(sel.value)];kb.textContent=e.kb;query.textContent=e.query;current.textContent="";status.textContent="Aguardando o primeiro passo.";status.className="status neutral"}
function next(){const e=examples[Number(sel.value)];if(i>=e.steps.length)return;const [title,detail]=e.steps[i];const d=document.createElement("div");d.className="step"+(i===e.steps.length-1&&e.success?" final":"");d.innerHTML='<div class="n">'+(i+1)+'</div><div><strong>'+title+'</strong><span>'+detail+'</span></div>';trace.appendChild(d);current.textContent=detail;i++;if(i===e.steps.length){status.textContent=e.success?"Prova concluída por refutação.":"Nenhuma cláusula vazia foi derivada.";status.className="status "+(e.success?"success":"failure")}else{status.textContent="Derivação em andamento.";status.className="status neutral"}}
sel.onchange=load;document.querySelector("#next").onclick=next;document.querySelector("#reset").onclick=load;load();