const flows={
direto:{
label:"Orientado pelos dados (data-driven)",
steps:[
["Fatos iniciais","A KB contém American(West), Missile(M1), Owns(Nono,M1), Sells(West,M1,Nono) e Enemy(Nono,America).","base"],
["Derivar arma","Missile(M1) ⇒ Weapon(M1) com θ={x/M1}.","derived"],
["Derivar hostilidade","Enemy(Nono,America) ⇒ Hostile(Nono) com θ={x/Nono}.","derived"],
["Verificar regra de criminalidade","American(West), Weapon(M1), Sells(West,M1,Nono), Hostile(Nono) satisfazem os antecedentes.","derived"],
["Concluir","Criminal(West) é adicionado à KB.","derived"]
]},
reverso:{
label:"Orientado pela meta (goal-driven)",
steps:[
["Meta inicial","Criminal(West)","goal"],
["Escolher regra compatível","A meta unifica com a regra de criminalidade. Surgem as submetas American(West), Weapon(y), Sells(West,y,z), Hostile(z).","goal"],
["Resolver American(West)","Fato encontrado diretamente na KB.","base"],
["Resolver Weapon(y)","Usar Missile(x) ⇒ Weapon(x); Missile(M1) produz θ={y/M1}.","goal"],
["Resolver Sells(West,M1,z)","Fato Sells(West,M1,Nono) produz θ={z/Nono}.","goal"],
["Resolver Hostile(Nono)","Usar Enemy(x,America) ⇒ Hostile(x); Enemy(Nono,America) satisfaz a submeta.","goal"],
["Concluir","Todas as submetas foram provadas; Criminal(West) é consequência da KB.","derived"]
]}};
let mode="direto",i=0;
const trace=document.querySelector("#trace"),state=document.querySelector("#state"),strategy=document.querySelector("#strategy");
function reset(){i=0;trace.innerHTML="";state.textContent="Aguardando execução.";strategy.textContent=flows[mode].label;document.querySelectorAll(".mode").forEach(b=>b.classList.toggle("active",b.dataset.mode===mode))}
function next(){const s=flows[mode].steps;if(i>=s.length)return;const [title,detail,kind]=s[i];const el=document.createElement("div");el.className="step "+kind;el.innerHTML='<div class="n">'+(i+1)+'</div><div><strong>'+title+'</strong><span>'+detail+'</span></div>';trace.appendChild(el);state.textContent=detail;i++}
document.querySelectorAll("[data-mode]").forEach(b=>b.addEventListener("click",()=>{mode=b.dataset.mode;reset()}));document.querySelector("#next").addEventListener("click",next);document.querySelector("#reset").addEventListener("click",reset);reset();