from dataclasses import dataclass, field
from random import Random
from typing import List

from .eight_queens import Board


@dataclass
class HillResult:
    success: bool
    initial: Board
    final: Board
    initial_conflicts: int
    final_conflicts: int
    iterations: int
    evaluated_states: int
    restarts: int = 0
    history: List[int] = field(default_factory=list)


def hill_climbing(initial: Board) -> HillResult:
    """
    Hill Climbing básico, sem movimentos laterais.
    Deve escolher o primeiro melhor vizinho conforme a ordem de vizinhança definida.
    """
    raise NotImplementedError("Implemente Hill Climbing.")


def random_restart(rng: Random, max_restarts: int = 50) -> HillResult:
    """
    Execute Hill Climbing com reinícios aleatórios até encontrar solução
    ou atingir max_restarts.
    """
    raise NotImplementedError("Implemente Random-Restart Hill Climbing.")
