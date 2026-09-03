"""Esqueleto para reproduzir os experimentos do relatório."""

from pathlib import Path

MAP = Path("data/mapa_teste.txt")


def main() -> None:
    print("Implemente aqui a execução padronizada dos experimentos.")
    print(f"Mapa público: {MAP}")
    print("Parte 1: buscas não informadas (BFS, DFS e UCS) e informadas (Gulosa e A*).")
    print("Parte 2: 100 sementes (0..99) para Hill Climbing e Random-Restart Hill Climbing.")


if __name__ == "__main__":
    main()
