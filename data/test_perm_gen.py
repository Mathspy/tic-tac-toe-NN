from perm_gen import *

class TestIsGameOver():
    def test_empty_board(self):
        assert isGameOver(
                    [Cell.EMPTY, Cell.EMPTY, Cell.EMPTY,
                    Cell.EMPTY, Cell.EMPTY, Cell.EMPTY,
                    Cell.EMPTY, Cell.EMPTY, Cell.EMPTY]
                ) == False

    def test_no_winner_board(self):
        assert isGameOver(
                    [Cell.FIRST_PLAYER, Cell.EMPTY, Cell.SECOND_PLAYER,
                    Cell.SECOND_PLAYER, Cell.FIRST_PLAYER, Cell.EMPTY,
                    Cell.SECOND_PLAYER, Cell.FIRST_PLAYER, Cell.EMPTY]
                ) == False

        assert isGameOver(
                    [Cell.SECOND_PLAYER, Cell.FIRST_PLAYER, Cell.SECOND_PLAYER,
                    Cell.FIRST_PLAYER, Cell.SECOND_PLAYER, Cell.FIRST_PLAYER,
                    Cell.FIRST_PLAYER, Cell.SECOND_PLAYER, Cell.FIRST_PLAYER]
                ) == False

        assert isGameOver(
                    [Cell.EMPTY, Cell.EMPTY, Cell.FIRST_PLAYER,
                    Cell.EMPTY, Cell.EMPTY, Cell.EMPTY,
                    Cell.EMPTY, Cell.EMPTY, Cell.EMPTY]
                ) == False

    def test_both_players_can_win(self):
        assert isGameOver(
                    [Cell.FIRST_PLAYER, Cell.FIRST_PLAYER, Cell.EMPTY,
                    Cell.SECOND_PLAYER, Cell.SECOND_PLAYER, Cell.SECOND_PLAYER,
                    Cell.EMPTY, Cell.EMPTY, Cell.FIRST_PLAYER]
                ) == Cell.SECOND_PLAYER

        assert isGameOver(
                    [Cell.SECOND_PLAYER, Cell.EMPTY, Cell.EMPTY,
                    Cell.FIRST_PLAYER, Cell.FIRST_PLAYER, Cell.FIRST_PLAYER,
                    Cell.EMPTY, Cell.EMPTY, Cell.SECOND_PLAYER]
                ) == Cell.FIRST_PLAYER

    def test_horizontal_victories(self):
        assert isGameOver(
                    [Cell.FIRST_PLAYER, Cell.FIRST_PLAYER, Cell.FIRST_PLAYER,
                    Cell.SECOND_PLAYER, Cell.EMPTY, Cell.SECOND_PLAYER,
                    Cell.EMPTY, Cell.EMPTY, Cell.EMPTY]
                ) == Cell.FIRST_PLAYER

        assert isGameOver(
                    [Cell.SECOND_PLAYER, Cell.EMPTY, Cell.EMPTY,
                    Cell.FIRST_PLAYER, Cell.FIRST_PLAYER, Cell.FIRST_PLAYER,
                    Cell.EMPTY, Cell.EMPTY, Cell.SECOND_PLAYER]
                ) == Cell.FIRST_PLAYER

        assert isGameOver(
                    [Cell.SECOND_PLAYER, Cell.SECOND_PLAYER, Cell.EMPTY,
                    Cell.EMPTY, Cell.EMPTY, Cell.SECOND_PLAYER,
                    Cell.FIRST_PLAYER, Cell.FIRST_PLAYER, Cell.FIRST_PLAYER]
                ) == Cell.FIRST_PLAYER

    def test_vertical_victories(self):
        assert isGameOver(
                    [Cell.FIRST_PLAYER, Cell.SECOND_PLAYER, Cell.EMPTY,
                    Cell.FIRST_PLAYER, Cell.SECOND_PLAYER, Cell.EMPTY,
                    Cell.FIRST_PLAYER, Cell.EMPTY, Cell.EMPTY]
                ) == Cell.FIRST_PLAYER

        assert isGameOver(
                    [Cell.EMPTY, Cell.FIRST_PLAYER, Cell.SECOND_PLAYER,
                    Cell.SECOND_PLAYER, Cell.FIRST_PLAYER, Cell.EMPTY,
                    Cell.EMPTY, Cell.FIRST_PLAYER, Cell.EMPTY]
                ) == Cell.FIRST_PLAYER

        assert isGameOver(
                    [Cell.SECOND_PLAYER, Cell.SECOND_PLAYER, Cell.FIRST_PLAYER,
                    Cell.EMPTY, Cell.EMPTY, Cell.FIRST_PLAYER,
                    Cell.EMPTY, Cell.EMPTY, Cell.FIRST_PLAYER]
                ) == Cell.FIRST_PLAYER

    def test_diagonal_victories(self):
        assert isGameOver(
                    [Cell.FIRST_PLAYER, Cell.SECOND_PLAYER, Cell.FIRST_PLAYER,
                    Cell.SECOND_PLAYER, Cell.FIRST_PLAYER, Cell.SECOND_PLAYER,
                    Cell.FIRST_PLAYER, Cell.SECOND_PLAYER, Cell.EMPTY]
                ) == Cell.FIRST_PLAYER

        assert isGameOver(
                    [Cell.FIRST_PLAYER, Cell.SECOND_PLAYER, Cell.FIRST_PLAYER,
                    Cell.SECOND_PLAYER, Cell.FIRST_PLAYER, Cell.SECOND_PLAYER,
                    Cell.EMPTY, Cell.SECOND_PLAYER, Cell.FIRST_PLAYER]
                ) == Cell.FIRST_PLAYER

class TestIsValidBoard():
    def test_full_board(self):
        assert isValid(
                    [Cell.FIRST_PLAYER, Cell.SECOND_PLAYER, Cell.FIRST_PLAYER,
                    Cell.FIRST_PLAYER, Cell.FIRST_PLAYER, Cell.SECOND_PLAYER,
                    Cell.SECOND_PLAYER, Cell.FIRST_PLAYER, Cell.SECOND_PLAYER]
                ) == False

        assert isValid(
                    [Cell.FIRST_PLAYER, Cell.FIRST_PLAYER, Cell.SECOND_PLAYER,
                    Cell.SECOND_PLAYER, Cell.SECOND_PLAYER, Cell.FIRST_PLAYER,
                    Cell.FIRST_PLAYER, Cell.SECOND_PLAYER, Cell.FIRST_PLAYER]
                ) == False

    def test_already_won_board(self):
        assert isValid(
                    [Cell.FIRST_PLAYER, Cell.FIRST_PLAYER, Cell.FIRST_PLAYER,
                    Cell.SECOND_PLAYER, Cell.EMPTY, Cell.SECOND_PLAYER,
                    Cell.EMPTY, Cell.EMPTY, Cell.EMPTY]
                ) == False

        assert isValid(
                    [Cell.FIRST_PLAYER, Cell.SECOND_PLAYER, Cell.FIRST_PLAYER,
                    Cell.SECOND_PLAYER, Cell.FIRST_PLAYER, Cell.SECOND_PLAYER,
                    Cell.FIRST_PLAYER, Cell.SECOND_PLAYER, Cell.EMPTY]
                ) == False

        assert isValid(
                    [Cell.SECOND_PLAYER, Cell.SECOND_PLAYER, Cell.FIRST_PLAYER,
                    Cell.EMPTY, Cell.EMPTY, Cell.FIRST_PLAYER,
                    Cell.EMPTY, Cell.EMPTY, Cell.FIRST_PLAYER]
                ) == False

    def test_impossible_counts(self):
        """Case: Only First player"""
        assert isValid(
                    [Cell.FIRST_PLAYER, Cell.EMPTY, Cell.EMPTY,
                    Cell.EMPTY, Cell.FIRST_PLAYER, Cell.FIRST_PLAYER,
                    Cell.EMPTY, Cell.EMPTY, Cell.EMPTY]
                ) == False

        """Case: Only Second player"""
        assert isValid(
                    [Cell.EMPTY, Cell.SECOND_PLAYER, Cell.EMPTY,
                    Cell.SECOND_PLAYER, Cell.EMPTY, Cell.SECOND_PLAYER,
                    Cell.EMPTY, Cell.SECOND_PLAYER, Cell.EMPTY]
                ) == False

        """Case: More Second Player than First"""
        assert isValid(
                    [Cell.SECOND_PLAYER, Cell.SECOND_PLAYER, Cell.EMPTY,
                    Cell.SECOND_PLAYER, Cell.FIRST_PLAYER, Cell.FIRST_PLAYER,
                    Cell.EMPTY, Cell.SECOND_PLAYER, Cell.FIRST_PLAYER]
                ) == False

    def test_valid_boards(self):
        assert isValid(
                    [Cell.FIRST_PLAYER, Cell.EMPTY, Cell.EMPTY,
                    Cell.SECOND_PLAYER, Cell.FIRST_PLAYER, Cell.FIRST_PLAYER,
                    Cell.EMPTY, Cell.SECOND_PLAYER, Cell.EMPTY]
                ) == True

        assert isValid(
                    [Cell.FIRST_PLAYER, Cell.SECOND_PLAYER, Cell.FIRST_PLAYER,
                    Cell.SECOND_PLAYER, Cell.EMPTY, Cell.SECOND_PLAYER,
                    Cell.FIRST_PLAYER, Cell.SECOND_PLAYER, Cell.FIRST_PLAYER]
                ) == True

        assert isValid(
                    [Cell.SECOND_PLAYER, Cell.SECOND_PLAYER, Cell.EMPTY,
                    Cell.SECOND_PLAYER, Cell.FIRST_PLAYER, Cell.FIRST_PLAYER,
                    Cell.FIRST_PLAYER, Cell.SECOND_PLAYER, Cell.FIRST_PLAYER]
                ) == True

class TestNoMoreMovesLeft():
    def test_full_board(self):
        assert noMoreMovesLeft(
                    [Cell.FIRST_PLAYER, Cell.SECOND_PLAYER, Cell.FIRST_PLAYER,
                    Cell.FIRST_PLAYER, Cell.FIRST_PLAYER, Cell.SECOND_PLAYER,
                    Cell.SECOND_PLAYER, Cell.FIRST_PLAYER, Cell.SECOND_PLAYER]
                ) == True

        assert noMoreMovesLeft(
                    [Cell.FIRST_PLAYER, Cell.FIRST_PLAYER, Cell.SECOND_PLAYER,
                    Cell.SECOND_PLAYER, Cell.SECOND_PLAYER, Cell.FIRST_PLAYER,
                    Cell.FIRST_PLAYER, Cell.SECOND_PLAYER, Cell.FIRST_PLAYER]
                ) == True

    def test_nonfull_board(self):
        assert noMoreMovesLeft(
                    [Cell.EMPTY, Cell.SECOND_PLAYER, Cell.FIRST_PLAYER,
                    Cell.FIRST_PLAYER, Cell.FIRST_PLAYER, Cell.SECOND_PLAYER,
                    Cell.SECOND_PLAYER, Cell.FIRST_PLAYER, Cell.SECOND_PLAYER]
                ) == False

        assert noMoreMovesLeft(
                    [Cell.FIRST_PLAYER, Cell.FIRST_PLAYER, Cell.SECOND_PLAYER,
                    Cell.SECOND_PLAYER, Cell.EMPTY, Cell.FIRST_PLAYER,
                    Cell.FIRST_PLAYER, Cell.SECOND_PLAYER, Cell.FIRST_PLAYER]
                ) == False

class TestMinMax():
    def test_already_lost(self):
        assert minimax(
                    [Cell.FIRST_PLAYER, Cell.EMPTY, Cell.FIRST_PLAYER,
                    Cell.FIRST_PLAYER, Cell.EMPTY, Cell.SECOND_PLAYER,
                    Cell.FIRST_PLAYER, Cell.SECOND_PLAYER, Cell.EMPTY],
                    0, Cell.SECOND_PLAYER, Cell.FIRST_PLAYER
                ) == -10

        assert minimax(
                    [Cell.FIRST_PLAYER, Cell.EMPTY, Cell.FIRST_PLAYER,
                    Cell.FIRST_PLAYER, Cell.EMPTY, Cell.SECOND_PLAYER,
                    Cell.FIRST_PLAYER, Cell.SECOND_PLAYER, Cell.EMPTY],
                    3, Cell.SECOND_PLAYER, Cell.FIRST_PLAYER
                ) == -7

    def test_already_won(self):
        assert minimax(
                    [Cell.FIRST_PLAYER, Cell.EMPTY, Cell.FIRST_PLAYER,
                    Cell.FIRST_PLAYER, Cell.EMPTY, Cell.SECOND_PLAYER,
                    Cell.FIRST_PLAYER, Cell.SECOND_PLAYER, Cell.EMPTY],
                    0, Cell.FIRST_PLAYER, Cell.FIRST_PLAYER
                ) == 10

        assert minimax(
                    [Cell.FIRST_PLAYER, Cell.EMPTY, Cell.FIRST_PLAYER,
                    Cell.FIRST_PLAYER, Cell.EMPTY, Cell.SECOND_PLAYER,
                    Cell.FIRST_PLAYER, Cell.SECOND_PLAYER, Cell.EMPTY],
                    3, Cell.FIRST_PLAYER, Cell.FIRST_PLAYER
                ) == 7

    def test_already_won(self):
        assert minimax(
                    [Cell.FIRST_PLAYER, Cell.SECOND_PLAYER, Cell.FIRST_PLAYER,
                    Cell.FIRST_PLAYER, Cell.FIRST_PLAYER, Cell.SECOND_PLAYER,
                    Cell.SECOND_PLAYER, Cell.FIRST_PLAYER, Cell.SECOND_PLAYER],
                    0, Cell.FIRST_PLAYER, Cell.FIRST_PLAYER
                ) == 0

        assert minimax(
                    [Cell.FIRST_PLAYER, Cell.FIRST_PLAYER, Cell.SECOND_PLAYER,
                    Cell.SECOND_PLAYER, Cell.SECOND_PLAYER, Cell.FIRST_PLAYER,
                    Cell.FIRST_PLAYER, Cell.SECOND_PLAYER, Cell.FIRST_PLAYER],
                    3, Cell.SECOND_PLAYER, Cell.FIRST_PLAYER
                ) == 0

class TestFindBestMove():
    def test_always_top_corner_on_empty_board(self):
        assert findBestMove(
                    [Cell.EMPTY, Cell.EMPTY, Cell.EMPTY,
                    Cell.EMPTY, Cell.EMPTY, Cell.EMPTY,
                    Cell.EMPTY, Cell.EMPTY, Cell.EMPTY],
                ) == 0

    def test_avoid_lose(self):
        assert findBestMove(
                    [Cell.FIRST_PLAYER, Cell.EMPTY, Cell.EMPTY,
                    Cell.FIRST_PLAYER, Cell.SECOND_PLAYER, Cell.SECOND_PLAYER,
                    Cell.EMPTY, Cell.FIRST_PLAYER, Cell.EMPTY],
                ) == 6

        assert findBestMove(
                    [Cell.SECOND_PLAYER, Cell.EMPTY, Cell.SECOND_PLAYER,
                    Cell.EMPTY, Cell.EMPTY, Cell.FIRST_PLAYER,
                    Cell.FIRST_PLAYER, Cell.EMPTY, Cell.EMPTY],
                ) == 1

    def test_go_for_win(self):
        assert findBestMove(
                    [Cell.FIRST_PLAYER, Cell.SECOND_PLAYER, Cell.EMPTY,
                    Cell.FIRST_PLAYER, Cell.SECOND_PLAYER, Cell.SECOND_PLAYER,
                    Cell.EMPTY, Cell.FIRST_PLAYER, Cell.EMPTY],
                ) == 6

        assert findBestMove(
                    [Cell.SECOND_PLAYER, Cell.EMPTY, Cell.SECOND_PLAYER,
                    Cell.EMPTY, Cell.FIRST_PLAYER, Cell.FIRST_PLAYER,
                    Cell.FIRST_PLAYER, Cell.EMPTY, Cell.EMPTY],
                ) == 1

class TestBytifier():
    def test_empty_board_is_empty_inputs(self):
        assert byteifyPossibility(
                    [Cell.EMPTY, Cell.EMPTY, Cell.EMPTY,
                    Cell.EMPTY, Cell.EMPTY, Cell.EMPTY,
                    Cell.EMPTY, Cell.EMPTY, Cell.EMPTY],
                ) == [0] * 18

    def test_boards(self):
        assert byteifyPossibility(
                    [Cell.EMPTY, Cell.FIRST_PLAYER, Cell.EMPTY,
                    Cell.FIRST_PLAYER, Cell.EMPTY, Cell.SECOND_PLAYER,
                    Cell.EMPTY, Cell.EMPTY, Cell.SECOND_PLAYER],
                ) == [0, 1, 0, 1, 0, 0, 0, 0, 0] + [0, 0, 0, 0, 0, 1, 0, 0, 1]

        assert byteifyPossibility(
                    [Cell.EMPTY, Cell.SECOND_PLAYER, Cell.EMPTY,
                    Cell.FIRST_PLAYER, Cell.FIRST_PLAYER, Cell.SECOND_PLAYER,
                    Cell.EMPTY, Cell.FIRST_PLAYER, Cell.SECOND_PLAYER],
                ) == [0, 0, 0, 1, 1, 0, 0, 1, 0] + [0, 1, 0, 0, 0, 1, 0, 0, 1]

        assert byteifyPossibility(
                    [Cell.FIRST_PLAYER, Cell.SECOND_PLAYER, Cell.FIRST_PLAYER,
                    Cell.FIRST_PLAYER, Cell.FIRST_PLAYER, Cell.SECOND_PLAYER,
                    Cell.SECOND_PLAYER, Cell.FIRST_PLAYER, Cell.SECOND_PLAYER],
                ) == [1, 0, 1, 1, 1, 0, 0, 1, 0] + [0, 1, 0, 0, 0, 1, 1, 0, 1]
