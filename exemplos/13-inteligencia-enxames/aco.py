import random
from problem import N_BITS, fitness

def probabilities(tau0, tau1, alpha):
  # TODO 1: calcule os pesos e normalize.
  raise NotImplementedError("TODO: probabilities")

def construct(pheromones, alpha, rng):
  bits = []
  for tau0, tau1 in pheromones:
    # TODO 2: use probabilities e rng.random() para decidir o bit.
    raise NotImplementedError("TODO: construct")
  return bits

def update(pheromones, solutions, rho=0.2, q=0.25):
  for i in range(N_BITS):
    for b in (0, 1):
      # TODO 3: evaporação + soma dos depósitos na escolha (i,b).
      raise NotImplementedError("TODO: update")

def run(seed=42, agents=20, iterations=30, alpha=1.0, rho=0.2):
  rng = random.Random(seed)
  pheromones = [[1.0, 1.0] for _ in range(N_BITS)]
  best = None
  best_score = -1
  history = []
  evaluations = 0
  for _ in range(iterations):
    solutions = []
    for _ in range(agents):
      bits = construct(pheromones, alpha, rng)
      score = fitness(bits)
      evaluations += 1
      solutions.append((bits, score))
      if score > best_score:
        best, best_score = bits[:], score
      history.append((evaluations, best_score))
    update(pheromones, solutions, rho)
  return {"best": best, "fitness": best_score, "history": history, "evaluations": evaluations}
