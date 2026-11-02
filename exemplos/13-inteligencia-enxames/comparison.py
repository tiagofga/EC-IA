import argparse
from aco import run as run_aco
from bpso import run as run_bpso
from problem import render

def main():
  parser = argparse.ArgumentParser()
  parser.add_argument("--seed", type=int, default=42)
  args = parser.parse_args()
  for name, runner in (("ACO", run_aco), ("BPSO", run_bpso)):
    result = runner(seed=args.seed)
    assert result["evaluations"] == 600
    assert all(result["history"][i][1] <= result["history"][i + 1][1]
               for i in range(len(result["history"]) - 1))
    print(f"{name}: fitness={result['fitness']}/16; avaliações={result['evaluations']}")
    print(render(result["best"]))
    try:
      import matplotlib.pyplot as plt
      plt.step([x for x, _ in result["history"]], [y for _, y in result["history"]], where="post", label=name)
    except ImportError:
      pass
  try:
    import matplotlib.pyplot as plt
    plt.xlabel("Avaliações do fitness")
    plt.ylabel("Melhor fitness acumulado")
    plt.ylim(0, 16.5)
    plt.legend()
    plt.tight_layout()
    plt.savefig("convergencia.png", dpi=160)
    print("Gráfico salvo em convergencia.png")
  except ImportError:
    print("Instale matplotlib para gerar o gráfico; os resultados em texto continuam válidos.")

if __name__ == "__main__":
  main()
