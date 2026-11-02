from pathlib import Path
import random

TARGET = [0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0]
N_BITS = len(TARGET)

def fitness(bits):
  assert len(bits) == N_BITS
  return sum(a == b for a, b in zip(bits, TARGET))

def render(bits):
  return "\n".join("".join("#" if v else "." for v in bits[i:i + 4]) for i in range(0, N_BITS, 4))
