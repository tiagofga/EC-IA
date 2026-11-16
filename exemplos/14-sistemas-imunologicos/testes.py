"""Testes básicos, sem bibliotecas externas."""

import random
from clonalg import ALVO, Config, executar, fitness, hipermutar, qtd_clones
from nsa import PROPRIO, gerar_detectores, reconhece


def main():
  assert fitness(ALVO) == 16
  assert fitness(tuple(1 - b for b in ALVO)) == 0
  assert qtd_clones(1, Config()) >= qtd_clones(2, Config())
  assert hipermutar((0, 1, 0, 1), 1.0, Config(p_min=0, p_max=0), random.Random(42)) == (0, 1, 0, 1)
  config = Config(seed=42, avaliacoes_max=200)
  a = executar(config)
  b = executar(config)
  assert a == b
  assert len(a["melhor"]) == 16
  assert a["avaliacoes"] <= config.avaliacoes_max
  assert all(not any(reconhece(d, s) for s in PROPRIO) for d in gerar_detectores())
  print("Todos os testes passaram.")


if __name__ == "__main__":
  main()
