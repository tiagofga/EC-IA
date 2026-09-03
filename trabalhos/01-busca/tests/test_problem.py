import unittest

from src.problem import WeightedGrid


class WeightedGridTests(unittest.TestCase):
    def setUp(self):
        self.problem = WeightedGrid.from_file("data/mapa_teste.txt")

    def test_dimensions(self):
        self.assertEqual((self.problem.height, self.problem.width), (8, 16))

    def test_start_and_goal(self):
        self.assertEqual(self.problem.start, (0, 0))
        self.assertEqual(self.problem.goal, (0, 15))

    def test_terrain_costs(self):
        self.assertEqual(self.problem.step_cost((0, 3)), 6)  # M
        self.assertEqual(self.problem.step_cost((6, 9)), 3)  # R
        self.assertEqual(self.problem.step_cost((0, 1)), 1)  # .

    def test_successor_order(self):
        successors = list(self.problem.successors((0, 2)))
        self.assertEqual([a for a, _, _ in successors], ["L", "S", "O"])


if __name__ == "__main__":
    unittest.main()
