from pathlib import Path
from typing import Iterable, List, Tuple

Pos = Tuple[int, int]
Grid = List[List[str]]

# Ordem obrigatória de sucessores no trabalho: Norte, Leste, Sul, Oeste.
DIRECTIONS = (
    ("N", (-1, 0)),
    ("L", (0, 1)),
    ("S", (1, 0)),
    ("O", (0, -1)),
)

CELL_COST = {
    ".": 1,
    "R": 3,
    "M": 6,
    "G": 1,
    "S": 1,
}

ALLOWED = set(CELL_COST) | {"#"}


class WeightedGrid:
    """Ambiente retangular ponderado utilizado na Parte 1 do trabalho."""

    def __init__(self, grid: Grid):
        if not grid or not grid[0]:
            raise ValueError("O mapa não pode ser vazio.")
        width = len(grid[0])
        if any(len(row) != width for row in grid):
            raise ValueError("Todas as linhas do mapa devem ter o mesmo tamanho.")

        invalid = {ch for row in grid for ch in row if ch not in ALLOWED}
        if invalid:
            raise ValueError(f"Símbolos inválidos no mapa: {sorted(invalid)}")

        self.grid = grid
        self.height = len(grid)
        self.width = width
        self.start = self._find_unique("S")
        self.goal = self._find_unique("G")

    @classmethod
    def from_file(cls, filename: str | Path) -> "WeightedGrid":
        lines = Path(filename).read_text(encoding="utf-8").splitlines()
        lines = [line.rstrip("\n") for line in lines if line.strip()]
        return cls([list(line) for line in lines])

    def _find_unique(self, symbol: str) -> Pos:
        positions = [
            (r, c)
            for r, row in enumerate(self.grid)
            for c, ch in enumerate(row)
            if ch == symbol
        ]
        if len(positions) != 1:
            raise ValueError(
                f"O mapa deve conter exatamente um '{symbol}', mas contém {len(positions)}."
            )
        return positions[0]

    def in_bounds(self, pos: Pos) -> bool:
        r, c = pos
        return 0 <= r < self.height and 0 <= c < self.width

    def passable(self, pos: Pos) -> bool:
        r, c = pos
        return self.grid[r][c] != "#"

    def goal_test(self, pos: Pos) -> bool:
        return pos == self.goal

    def step_cost(self, destination: Pos) -> int:
        r, c = destination
        return CELL_COST[self.grid[r][c]]

    def successors(self, pos: Pos) -> Iterable[tuple[str, Pos, int]]:
        """Retorna sucessores válidos em ordem N, L, S, O."""
        r, c = pos
        for action, (dr, dc) in DIRECTIONS:
            nxt = (r + dr, c + dc)
            if self.in_bounds(nxt) and self.passable(nxt):
                yield action, nxt, self.step_cost(nxt)

    def render_path(self, path: list[Pos]) -> str:
        canvas = [row.copy() for row in self.grid]
        for r, c in path:
            if canvas[r][c] not in {"S", "G"}:
                canvas[r][c] = "*"
        return "\n".join("".join(row) for row in canvas)
