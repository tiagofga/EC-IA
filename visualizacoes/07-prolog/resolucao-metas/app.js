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
grafo:{
program:`aresta(a,b).
aresta(a,c).
aresta(b,d).
aresta(c,e).
aresta(e,d).

alcanca(X,Y) :- aresta(X,Y).
alcanca(X,Y) :- aresta(X,Z), alcanca(Z,Y).

?- alcanca(a,d).`,
steps:[
{title:'Meta inicial',detail:'Tentar provar alcanca(a,d).',goal:'alcanca(a,d)',clause:'-',subst:'{}',subgoals:'alcanca(a,d)',kind:'choice'},
{title:'Caso base',detail:'A regra direta tenta aresta(a,d), mas não existe esse fato.',goal:'aresta(a,d)',clause:'alcanca(X,Y) :- aresta(X,Y)',subst:'{X/a, Y/d}',subgoals:'aresta(a,d)',kind:'fail'},
{title:'Regra recursiva',detail:'A regra recursiva gera aresta(a,Z) e alcanca(Z,d).',goal:'alcanca(a,d)',clause:'alcanca(X,Y) :- aresta(X,Z), alcanca(Z,Y)',subst:'{X/a, Y/d}',subgoals:'aresta(a,Z), alcanca(Z,d)',kind:'choice'},
{title:'Primeiro ramo',detail:'aresta(a,b) produz Z=b. A nova meta é alcanca(b,d).',goal:'aresta(a,Z)',clause:'aresta(a,b)',subst:'{Z/b}',subgoals:'alcanca(b,d)',kind:'choice'},
{title:'Aprofundar',detail:'alcanca(b,d) usa o caso base aresta(b,d).',goal:'alcanca(b,d)',clause:'alcanca(X,Y) :- aresta(X,Y)',subst:'{X/b, Y/d}',subgoals:'aresta(b,d)',kind:'success'},
{title:'Sucesso',detail:'O caminho a → b → d prova a consulta.',goal:'aresta(b,d)',clause:'aresta(b,d)',subst:'{}',subgoals:'nenhuma',kind:'success'},
{title:'Outra solução',detail:'Ao solicitar outra resposta, o sistema retrocede até aresta(a,Z) e tenta Z=c.',goal:'aresta(a,Z)',clause:'aresta(a,c)',subst:'{Z/c}',subgoals:'alcanca(c,d)',kind:'choice'},
{title:'Novo ramo',detail:'O ramo c exige alcanca(c,d), que passa por e antes de chegar a d.',goal:'alcanca(c,d)',clause:'alcanca(X,Y) :- aresta(X,Z), alcanca(Z,Y)',subst:'{X/c, Y/d, Z/e}',subgoals:'aresta(c,e), alcanca(e,d)',kind:'choice'},
{title:'Segunda prova',detail:'aresta(e,d) completa o caminho a → c → e → d.',goal:'alcanca(e,d)',clause:'aresta(e,d)',subst:'{}',subgoals:'nenhuma',kind:'success'}
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
