import math
import numpy as np
import pickle

from itertools import product
from enum import Enum

class Cell(Enum):
    EMPTY = ' '
    FIRST_PLAYER = 'X'
    SECOND_PLAYER = 'O'

all_possibilities = [list(board) for board in product([Cell.EMPTY, Cell.FIRST_PLAYER, Cell.SECOND_PLAYER], repeat=9)]
print(len(all_possibilities))

def isGameOver(board):
    for x in range (0, 3):
        y = x * 3
        if (board[y] != Cell.EMPTY and board[y] == board[(y + 1)] and board[y] == board[(y + 2)]) :
            return board[y]
        if (board[x] != Cell.EMPTY and board[x] == board[(x + 3)] and board[x] == board[(x + 6)]) :
            return board[x]

    if (board[0] != Cell.EMPTY and board[0] == board[4] and board[0] == board[8]):
        return board[0]
    if (board[2] != Cell.EMPTY and board[2] == board[4] and board[4] == board[6]):
        return board[2]

    return False

def isValid(board):
    # Count number of 'X' and 'O' in the given board
    firstPlayerCount = board.count(Cell.FIRST_PLAYER)
    secondPlayerCount = board.count(Cell.SECOND_PLAYER)

    # Board can be valid only if either xCount and oCount
    # is same or xount is one more than oCount
    if (firstPlayerCount == secondPlayerCount or firstPlayerCount == secondPlayerCount + 1):
        # Check if gameOver then permutation is not needed
        if (isGameOver(board) or noMoreMovesLeft(board)):
            return False

        # If counts are correct and game isn't over
        return True

    return False

def noMoreMovesLeft(board):
    return True if board.count(Cell.EMPTY) == 0 else False


def findBestMove(board):
    me = Cell.FIRST_PLAYER if board.count(Cell.FIRST_PLAYER) == board.count(Cell.SECOND_PLAYER) else Cell.SECOND_PLAYER
    bestMove = (None, -math.inf)
    for idx, cell in enumerate(board):
        if (cell == Cell.EMPTY):
            newBoard = board.copy()
            newBoard[idx] = me
            moveValue = minimax(newBoard, 0, me, me)
            if (bestMove[1] < moveValue):
                bestMove = (idx, moveValue)

    return bestMove[0]

def minimax(board, depth, me, turn):
    winner = isGameOver(board)
    if (winner):
        if (winner == me):
            return 10 - depth
        else:
            return -10 + depth
    elif (noMoreMovesLeft(board)):
        return 0

    turn = Cell.FIRST_PLAYER if turn == Cell.SECOND_PLAYER else Cell.SECOND_PLAYER

    bestValue = -math.inf
    for idx, cell in enumerate(board):
        if (cell == Cell.EMPTY):
            newBoard = board.copy()
            newBoard[idx] = turn
            value = minimax(newBoard, depth+1, me, turn)
            bestValue = max(bestValue, value) if me == turn else min(bestValue, value)

    return bestValue


def byteifyPossibility(board):
    return [(1 if cell == Cell.FIRST_PLAYER else 0) for cell in board] + [(1 if cell == Cell.SECOND_PLAYER else 0) for cell in board]

valid_possibilities = [board for board in all_possibilities if isValid(board)]
train_x = np.array([byteifyPossibility(board) for board in valid_possibilities])
train_y = np.array([findBestMove(board) for board in valid_possibilities])
print(train_x.shape)
print(train_y.shape)
pickle.dump(train_x, open("./data/train_inputs.pickle", "wb"))
pickle.dump(train_y, open("./data/train_labels.pickle", "wb"))
