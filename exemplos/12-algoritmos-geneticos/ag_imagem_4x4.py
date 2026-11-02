#!/usr/bin/env python3

"""Aula 12 - Algoritmos Geneticos (pratica): solucao de referencia pos-aula.

Evolui uma imagem binaria 4x4 com algoritmo genetico implementado do zero.
Reprodutibilidade: todas as escolhas aleatorias usam random.Random(seed).
Dependencia opcional para graficos: matplotlib.

Exemplos:
  python ag_imagem_4x4.py --seed 42
  python ag_imagem_4x4.py --seed 42 --mutacao 0.20 --geracoes 30
  python ag_imagem_4x4.py --seed 42 --sem-grafico
"""

import argparse
import random
from dataclasses import dataclass
from pathlib import Path

# Igual ao alvo apresentado nos slides: 0 = branco; 1 = preto.
LADO = 4
TAMANHO = LADO * LADO
ALVO = [int(bit) for bit in "0110100110010110"]
# ALVO = [int(bit) for bit in "0111111110100000000110000000011000000001100000000110000000011000000001100000000110000000010111111110"]



def criar_individuo(rng: random.Random) -> list[int]:
  return [rng.randrange(2) for _ in range(TAMANHO)]


def criar_populacao(n: int, rng: random.Random) -> list[list[int]]:
  if n < 2:
    raise ValueError("A populacao deve ter pelo menos 2 individuos.")
  return [criar_individuo(rng) for _ in range(n)]


def fitness(individuo: list[int], alvo: list[int] = ALVO) -> int:
  if len(individuo) != len(alvo):
    raise ValueError("Individuo e alvo devem ter o mesmo tamanho.")
  return sum(a == b for a, b in zip(individuo, alvo))


def selecionar_pai(populacao: list[list[int]], rng: random.Random,
                  alvo: list[int] = ALVO) -> list[int]:
  """Torneio de 2; amostragem sem reposicao dentro do torneio."""
  i, j = rng.sample(range(len(populacao)), 2)
  vencedor = populacao[i] if fitness(populacao[i], alvo) >= fitness(populacao[j], alvo) else populacao[j]
  return vencedor.copy()


def crossover(pai1: list[int], pai2: list[int], rng: random.Random) -> tuple[list[int], list[int]]:
  """Crossover de um ponto; retorna dois filhos independentes."""
  if len(pai1) != len(pai2) or len(pai1) < 2:
    raise ValueError("Pais precisam ter mesmo tamanho >= 2.")
  corte = rng.randrange(1, len(pai1))
  return pai1[:corte] + pai2[corte:], pai2[:corte] + pai1[corte:]


def mutacao(individuo: list[int], pm: float, rng: random.Random) -> list[int]:
    """Mutacao bit a bit, probabilidade pm independente por gene."""
    if not 0 <= pm <= 1:
      raise ValueError("A taxa de mutacao deve estar entre 0 e 1.")
    return [1 - bit if rng.random() < pm else bit for bit in individuo]


def validar_populacao(populacao: list[list[int]], tamanho: int) -> None:
  assert len(populacao) == tamanho
  assert all(len(ind) == TAMANHO for ind in populacao)
  assert all(bit in (0, 1) for ind in populacao for bit in ind)
  assert all(0 <= fitness(ind) <= TAMANHO for ind in populacao)


@dataclass
class Resultado:
  melhor: list[int]
  melhor_fitness: int
  geracao_parada: int
  historico_melhor: list[int]
  historico_medio: list[float]
  inicial: list[int]


def executar(seed: int = 42, n: int = 20, geracoes: int = 30,
            pm: float = 0.01, pc: float = 0.8) -> Resultado:
  if not 0 <= pc <= 1:
    raise ValueError("A taxa de crossover deve estar entre 0 e 1.")
  if not 0 <= pm <= 1:
    raise ValueError("A taxa de mutacao deve estar entre 0 e 1.")
  if geracoes < 0:
    raise ValueError("O numero de geracoes nao pode ser negativo.")
  rng = random.Random(seed)
  populacao = criar_populacao(n, rng)
  validar_populacao(populacao, n)
  inicial = max(populacao, key=fitness).copy()
  melhor = inicial.copy()
  hist_melhor: list[int] = []
  hist_medio: list[float] = []

  # Geração 0 também é registrada. Com elitismo, o melhor é não decrescente.
  for geracao in range(geracoes + 1):
    avaliacoes = [fitness(ind) for ind in populacao]
    indice = max(range(n), key=lambda i: avaliacoes[i])
    if avaliacoes[indice] > fitness(melhor):
      melhor = populacao[indice].copy()
    hist_melhor.append(fitness(melhor))
    hist_medio.append(sum(avaliacoes) / n)

    if fitness(melhor) == TAMANHO or geracao == geracoes:
      return Resultado(melhor, fitness(melhor), geracao,
                      hist_melhor, hist_medio, inicial)

    # Elitismo: preservar um individuo sem mutacao.
    nova_populacao = [melhor.copy()]
    while len(nova_populacao) < n:
      pai1 = selecionar_pai(populacao, rng)
      pai2 = selecionar_pai(populacao, rng)
      if rng.random() < pc:
        filho1, filho2 = crossover(pai1, pai2, rng)
      else:
        filho1, filho2 = pai1.copy(), pai2.copy()
      for filho in (filho1, filho2):
        if len(nova_populacao) < n:
          nova_populacao.append(mutacao(filho, pm, rng))
    populacao = nova_populacao
    validar_populacao(populacao, n)
  raise RuntimeError("Fluxo inesperado")


def mostrar_grade(bits: list[int]) -> str:
  return "\n".join(" ".join("■" if b else "·" for b in bits[i:i+LADO])
                  for i in range(0, TAMANHO, LADO))


def salvar_graficos(resultado: Resultado, arquivo: Path) -> None:
  try:
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
  except ImportError:
    print("Matplotlib nao instalado; graficos ignorados. Instale com: pip install matplotlib")
    return
  fig, ax = plt.subplots(1, 4, figsize=(13, 3.4), gridspec_kw={"width_ratios": [1,1,1,1.6]})
  for eixo, bits, titulo in zip(ax[:3], [ALVO, resultado.inicial, resultado.melhor],
                                ["Imagem-alvo", "Melhor inicial", "Melhor final"]):
    matriz = [bits[i:i+LADO] for i in range(0, TAMANHO, LADO)]
    eixo.imshow(matriz, cmap="gray_r", vmin=0, vmax=1, interpolation="nearest")
    eixo.set_title(titulo, fontsize=10)
    eixo.set_xticks(range(LADO)); eixo.set_yticks(range(LADO))
    eixo.set_xticklabels([]); eixo.set_yticklabels([])
    eixo.set_xticks([v - .5 for v in range(1, LADO)], minor=True)
    eixo.set_yticks([v - .5 for v in range(1, LADO)], minor=True)
    eixo.grid(which="minor", linewidth=.7)
    eixo.tick_params(length=0)
  xs = list(range(len(resultado.historico_melhor)))
  ax[3].plot(xs, resultado.historico_melhor, label="Melhor fitness")
  ax[3].plot(xs, resultado.historico_medio, label="Fitness medio")
  ax[3].set(xlabel="Geracao", ylabel="Fitness", ylim=(0, 16.5), title="Evolucao")
  ax[3].legend(fontsize=8)
  fig.tight_layout()
  arquivo.parent.mkdir(parents=True, exist_ok=True)
  fig.savefig(arquivo, dpi=160)
  plt.close(fig)
  print(f"Grafico salvo em: {arquivo}")


def autoteste() -> None:
  assert len(ALVO) == TAMANHO
  assert fitness(ALVO) == TAMANHO
  assert fitness([1 - x for x in ALVO]) == 0
  assert mutacao(ALVO, 0, random.Random(42)) == ALVO
  assert mutacao(ALVO, 1, random.Random(42)) == [1 - x for x in ALVO]
  a = executar(seed=42, n=21, geracoes=30, pm=.01)
  b = executar(seed=42, n=21, geracoes=30, pm=.01)
  assert a == b, "A seed deve reproduzir exatamente o resultado."
  assert all(x <= y for x, y in zip(a.historico_melhor, a.historico_melhor[1:]))
  print("Autotestes passaram.")


def main() -> None:
  p = argparse.ArgumentParser(description=__doc__)
  p.add_argument("--seed", type=int, default=42, help="Semente da execucao (padrao: 42)")
  p.add_argument("--populacao", type=int, default=20)
  p.add_argument("--geracoes", type=int, default=30)
  p.add_argument("--mutacao", type=float, default=.01, help="Probabilidade de mutacao por bit")
  p.add_argument("--crossover", type=float, default=.8, help="Probabilidade de aplicar crossover ao par")
  p.add_argument("--saida", type=Path, default=Path("ag_imagem_4x4_resultado.png"))
  p.add_argument("--sem-grafico", action="store_true")
  p.add_argument("--testes", action="store_true")
  args = p.parse_args()
  if args.testes:
    autoteste()
  resultado = executar(args.seed, args.populacao, args.geracoes, args.mutacao, args.crossover)
  print(f"Seed: {args.seed} | Populacao: {args.populacao} | Geracoes maximas: {args.geracoes}")
  print(f"Mutacao por gene: {args.mutacao} | Crossover: {args.crossover}")
  print(f"Melhor fitness: {resultado.melhor_fitness}/{TAMANHO} | Geracao de parada: {resultado.geracao_parada}")
  print("\nAlvo:\n" + mostrar_grade(ALVO))
  print("\nMelhor solucao:\n" + mostrar_grade(resultado.melhor))
  print("\nCromossomo:", "".join(map(str, resultado.melhor)))
  if not args.sem_grafico:
    salvar_graficos(resultado, args.saida)


if __name__ == "__main__":
  main()
