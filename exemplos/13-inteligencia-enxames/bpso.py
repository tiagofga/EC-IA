import math
import random
from problem import N_BITS, fitness

def sigmoid(v):
  return 1.0 / (1.0 + math.exp(-max(-30.0, min(30.0, v))))

def next_particle(position, velocity, pbest, gbest, rng, w=0.7, c1=1.5, c2=1.5):
  new_velocity = []
  new_position = []
  for i in range(N_BITS):
    # TODO: atualize v; limite-a a [-6, 6]; sorteie o bit via sigmoid.
    raise NotImplementedError("TODO: next_particle")
  return new_position, new_velocity

def run(seed=42, agents=20, iterations=30, w=0.7, c1=1.5, c2=1.5):
  rng = random.Random(seed)
  positions = [[rng.randrange(2) for _ in range(N_BITS)] for _ in range(agents)]
  velocities = [[0.0] * N_BITS for _ in range(agents)]
  pbests = [x[:] for x in positions]
  pbest_scores = [fitness(x) for x in positions]
  evaluations = agents
  best_i = max(range(agents), key=lambda i: pbest_scores[i])
  gbest = pbests[best_i][:]
  best_score = pbest_scores[best_i]
  history = [(i + 1, max(pbest_scores[:i + 1])) for i in range(agents)]
  for _ in range(iterations - 1):
    for i in range(agents):
      positions[i], velocities[i] = next_particle(positions[i], velocities[i], pbests[i], gbest, rng, w, c1, c2)
      score = fitness(positions[i])
      evaluations += 1
      if score > pbest_scores[i]:
        pbests[i], pbest_scores[i] = positions[i][:], score
      if score > best_score:
        gbest, best_score = positions[i][:], score
      history.append((evaluations, best_score))
  return {"best": gbest, "fitness": best_score, "history": history, "evaluations": evaluations}
