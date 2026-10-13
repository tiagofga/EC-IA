# Visualização - Inferência em LPO

Esta visualização compara encadeamento direto e reverso usando o **caso West**, o mesmo exemplo condutor da Parte II da Aula 06.

## Base usada

```text
American(West)
Missile(M1)
Owns(Nono,M1)
Sells(West,M1,Nono)
Enemy(Nono,America)
```

Consulta:

```text
Criminal(West)
```

## O que observar

- no encadeamento direto, novos fatos são derivados a partir dos dados;
- no encadeamento reverso, a consulta é decomposta em submetas;
- as substituições aparecem no momento em que fatos e regras são compatibilizados;
- a ordem de exploração muda, embora a KB seja a mesma;
- o encadeamento reverso prepara a discussão de retrocesso e Prolog.
