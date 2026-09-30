const scenarios={
ancestral:{
program:`progenitor(ana, bruno).
progenitor(bruno, clara).

ancestral(X,Y) :- progenitor(X,Y).
ancestral(X,Y) :- progenitor(X,Z), ancestral(Z,Y).

?- ancestral(ana, clara).`,
steps:[
{title:'Meta inicial',detail:'Tentar provar ancestral(ana, clara).',goal:'ancestral(ana, clara)',clause:'-',subst:'{}',subgoals:'ancestral(ana, clara)',kind:'choice'},
{title:'Primeira cláusula',detail:'A regra direta ancestral(X,Y) :- progenitor(X,Y) unifica com a meta.',goal:'ancestral(ana, clara)',clause:'ancestral(X,Y) :- progenitor(X,Y)',subst:'{X/ana, Y/clara}',subgoals:'progenitor(ana, clara)',kind:'choice'},
{title:'Falha da submeta',detail:'Não existe fato progenitor(ana, clara). É necessário retroceder.',goal:'progenitor(ana, clara)',clause:'nenhum fato compatível',subst:'{X/ana, Y/clara}',subgoals:'-',kind:'fail'},
{title:'Retrocesso',detail:'Voltar ao ponto de escolha e tentar a regra recursiva.',goal:'ancestral(ana, clara)',clause:'ancestral(X,Y) :- progenitor(X,Z), ancestral(Z,Y)',subst:'{X/ana, Y/clara}',subgoals:'progenitor(ana,Z), ancestral(Z,clara)',kind:'choice'},
{title:'Resolver primeira submeta',detail:'progenitor(ana,Z) unifica com progenitor(ana,bruno).',goal:'progenitor(ana,Z)',clause:'progenitor(ana, bruno)',subst:'{Z/bruno}',subgoals:'ancestral(bruno,clara)',kind:'success'},
{title:'Resolver submeta restante',detail:'ancestral(bruno,clara) usa a regra direta e o fato progenitor(bruno,clara).',goal:'ancestral(bruno,clara)',clause:'ancestral(X,Y) :- progenitor(X,Y)',subst:'{X/bruno, Y/clara}',subgoals:'progenitor(bruno,clara)',kind:'success'},
{title:'Sucesso',detail:'Todas as submetas foram provadas. A consulta é verdadeira.',goal:'-',clause:'-',subst:'{}',subgoals:'nenhuma',kind:'success'}
]},
retrocesso:{
program:`cor(azul).
cor(vermelho).

gosta(ana, azul).

escolha(X) :- cor(X), gosta(ana, X).

?- escolha(X).`,
steps:[
{title:'Meta inicial',detail:'Tentar provar escolha(X).',goal:'escolha(X)',clause:'escolha(X) :- cor(X), gosta(ana,X)',subst:'{}',subgoals:'cor(X), gosta(ana,X)',kind:'choice'},
{title:'Primeira escolha',detail:'cor(X) usa o primeiro fato: X = azul.',goal:'cor(X)',clause:'cor(azul)',subst:'{X/azul}',subgoals:'gosta(ana,azul)',kind:'choice'},
{title:'Sucesso',detail:'gosta(ana,azul) é fato. Primeira solução: X = azul.',goal:'gosta(ana,azul)',clause:'gosta(ana, azul)',subst:'{X/azul}',subgoals:'nenhuma',kind:'success'},
{title:'Solicitar outra solução',detail:'Ao pedir outra resposta, o sistema retrocede até cor(X).',goal:'cor(X)',clause:'próxima alternativa',subst:'{}',subgoals:'cor(X), gosta(ana,X)',kind:'choice'},
{title:'Segunda escolha',detail:'cor(X) usa X = vermelho.',goal:'cor(X)',clause:'cor(vermelho)',subst:'{X/vermelho}',subgoals:'gosta(ana,vermelho)',kind:'choice'},
{title:'Falha',detail:'Não existe gosta(ana,vermelho). Não há mais alternativas.',goal:'gosta(ana,vermelho)',clause:'nenhum fato compatível',subst:'{X/vermelho}',subgoals:'-',kind:'fail'}
]}};
let scenario='ancestral',index=0;
const program=document.querySelector('#program'),goal=document.querySelector('#goal'),clause=document.querySelector('#clause'),subst=document.querySelector('#subst'),subgoals=document.querySelector('#subgoals'),trace=document.querySelector('#trace');
function reset(){scenario=document.querySelector('#scenario').value;index=0;program.textContent=scenarios[scenario].program;goal.textContent='-';clause.textContent='-';subst.textContent='-';subgoals.textContent='-';trace.innerHTML=''}
function next(){const steps=scenarios[scenario].steps;if(index>=steps.length)return;const s=steps[index];goal.textContent=s.goal;clause.textContent=s.clause;subst.textContent=s.subst;subgoals.textContent=s.subgoals;const el=document.createElement('div');el.className='step '+s.kind;el.innerHTML='<div class="n">'+(index+1)+'</div><div><strong>'+s.title+'</strong><span>'+s.detail+'</span></div>';trace.appendChild(el);index++}
document.querySelector('#scenario').addEventListener('change',reset);document.querySelector('#next').addEventListener('click',next);document.querySelector('#reset').addEventListener('click',reset);reset();
