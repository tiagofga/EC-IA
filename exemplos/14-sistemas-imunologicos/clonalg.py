"""CLONALG didático para uma imagem binária de 4 x 4 pixels.

Variante documentada:
- Maximização: afinidade = fitness / 16 (intervalo [0, 1]).
- Clonagem por posição: ceil(beta * n_sel / rank).
- Hipermutação por bit: p_min + (p_max - p_min) * (1 - afinidade).
- Seleção elitista entre pais e clones; renovação aleatória de parte da população.
- O alvo só é consultado pela função de fitness, nunca para construir indivíduos.
- Cada chamada a fitness conta como uma avaliação; a parada respeita o orçamento.
"""

from dataclasses import dataclass
import argparse
import csv
import math
import random

ALVO = (0, 1, 1, 0,
        1, 0, 0, 1,
        1, 0, 0, 1,
        0, 1, 1, 0)


@dataclass
class Config:
  tamanho_pop: int = 20
  selecionados: int = 5
  beta: float = 1.0
  p_min: float = 0.02
  p_max: float = 0.35
  renovacao: int = 2
  avaliacoes_max: int = 1000
  seed: int = 42


def fitness(bits, alvo=ALVO):
  if len(bits) != len(alvo):
    raise ValueError("Candidato e alvo precisam ter o mesmo tamanho")
  return sum(a == b for a, b in zip(bits, alvo))


def criar_candidato(rng, tamanho):
  return tuple(rng.randint(0, 1) for _ in range(tamanho))


def hipermutar(bits, afinidade, cfg, rng):
  prob = cfg.p_min + (cfg.p_max - cfg.p_min) * (1 - afinidade)
  return tuple(1 - bit if rng.random() < prob else bit for bit in bits)


def qtd_clones(posicao, cfg):
  return math.ceil(cfg.beta * cfg.selecionados / posicao)


def validar(cfg):
  if cfg.tamanho_pop < 2 or not 1 <= cfg.selecionados <= cfg.tamanho_pop:
    raise ValueError("População e número de selecionados inválidos")
  if cfg.beta <= 0 or not 0 <= cfg.p_min <= cfg.p_max <= 1:
    raise ValueError("Parâmetros de clonagem/hipermutação inválidos")
  if not 0 <= cfg.renovacao < cfg.tamanho_pop:
    raise ValueError("Renovação deve ser menor que a população")
  if cfg.avaliacoes_max < cfg.tamanho_pop:
    raise ValueError("Orçamento menor que a população inicial")


def executar(cfg, alvo=ALVO):
  validar(cfg)
  rng = random.Random(cfg.seed)
  avaliacoes = 0
  historico = []

  def avaliar(bits):
    nonlocal avaliacoes
    if avaliacoes >= cfg.avaliacoes_max:
      raise RuntimeError("Orçamento esgotado")
    nota = fitness(bits, alvo)
    avaliacoes += 1
    return nota

  populacao = []
  melhor = None
  melhor_nota = -1

  def registrar(bits, nota):
    nonlocal melhor, melhor_nota
    if nota > melhor_nota:
      melhor, melhor_nota = bits, nota
    historico.append((avaliacoes, melhor_nota))

  for _ in range(cfg.tamanho_pop):
    bits = criar_candidato(rng, len(alvo))
    nota = avaliar(bits)
    populacao.append((bits, nota))
    registrar(bits, nota)

  geracoes = 0
  while avaliacoes < cfg.avaliacoes_max and melhor_nota < len(alvo):
    geracoes += 1
    ordenados = sorted(populacao, key=lambda x: x[1], reverse=True)
    selecionados = ordenados[:cfg.selecionados]
    candidatos = list(populacao)

    for posicao, (pai, nota) in enumerate(selecionados, start=1):
      for _ in range(qtd_clones(posicao, cfg)):
        if avaliacoes >= cfg.avaliacoes_max:
          break
        clone = hipermutar(pai, nota / len(alvo), cfg, rng)
        nota_clone = avaliar(clone)
        candidatos.append((clone, nota_clone))
        registrar(clone, nota_clone)
      if avaliacoes >= cfg.avaliacoes_max:
        break

    # Preserva as melhores soluções encontradas nesta geração.
    candidatos.sort(key=lambda x: x[1], reverse=True)
    populacao = candidatos[:cfg.tamanho_pop - cfg.renovacao]
    for _ in range(cfg.renovacao):
      if avaliacoes >= cfg.avaliacoes_max:
        break
      bits = criar_candidato(rng, len(alvo))
      nota = avaliar(bits)
      populacao.append((bits, nota))
      registrar(bits, nota)

    # Se o orçamento terminou, a população pode estar incompleta: isso é permitido.

  return {
    "melhor": melhor,
    "fitness": melhor_nota,
    "avaliacoes": avaliacoes,
    "geracoes": geracoes,
    "historico": historico,
    "atingiu_otimo": melhor_nota == len(alvo)
  }


def mostrar(bits):
  for linha in range(0, len(bits), 4):
    print(" ".join("#" if b else "." for b in bits[linha:linha + 4]))


def main():
  parser = argparse.ArgumentParser(description="CLONALG didático, 16 bits")
  parser.add_argument("--seed", type=int, default=42)
  parser.add_argument("--avaliacoes", type=int, default=1000)
  parser.add_argument("--beta", type=float, default=1.0)
  parser.add_argument("--p-max", type=float, default=0.35)
  parser.add_argument("--csv", default="historico_clonalg.csv")
  args = parser.parse_args()
  cfg = Config(seed=args.seed, avaliacoes_max=args.avaliacoes,
               beta=args.beta, p_max=args.p_max)
  resultado = executar(cfg)
  print(f"Seed: {cfg.seed} | Avaliações: {resultado['avaliacoes']} | Gerações: {resultado['geracoes']}")
  print(f"Melhor fitness: {resultado['fitness']}/16 | Ótimo encontrado: {resultado['atingiu_otimo']}")
  mostrar(resultado["melhor"])
  with open(args.csv, "w", newline="", encoding="utf-8") as arquivo:
    escritor = csv.writer(arquivo)
    escritor.writerow(["avaliacao", "melhor_fitness"])
    escritor.writerows(resultado["historico"])
  print(f"Histórico: {args.csv}")


if __name__ == "__main__":
  main()
