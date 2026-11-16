"""Exemplo complementar de seleção negativa com cadeias binárias de 8 bits.

Detecção por correspondência em pelo menos r posições na mesma janela contígua
(r-contiguous matching). É uma escolha didática, não um detector de segurança real.
"""

import random

PROPRIO = {"00000000", "00000001", "00010000", "00100000"}
R = 4


def reconhece(a, b, r=R):
  return any(a[i:i + r] == b[i:i + r] for i in range(len(a) - r + 1))


def gerar_detectores(qtd=12, seed=42):
  rng = random.Random(seed)
  detectores = set()
  tentativas = 0
  while len(detectores) < qtd and tentativas < 10000:
    tentativas += 1
    candidato = "".join(str(rng.randint(0, 1)) for _ in range(8))
    if not any(reconhece(candidato, normal) for normal in PROPRIO):
      detectores.add(candidato)
  return sorted(detectores)


def main():
  detectores = gerar_detectores()
  amostras = ["00000000", "00010000", "11111111", "10101111", "01010101"]
  print("Detectores:", detectores)
  print("Saída = anomalia possível (não é diagnóstico conclusivo)")
  for amostra in amostras:
    ativado = any(reconhece(amostra, d) for d in detectores)
    print(amostra, "->", "suspeita" if ativado else "não detectada")


if __name__ == "__main__":
  main()
