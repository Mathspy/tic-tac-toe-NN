from itertools import product
from enum import Enum

class Cell(Enum):
    EMPTY = ' '
    FIRST_PLAYER = 'X'
    SECOND_PLAYER = 'O'

all_possibilities = list(product([Cell.EMPTY, Cell.FIRST_PLAYER, Cell.SECOND_PLAYER], repeat=9))
print(len(all_possibilities))

def isGameOver(board):
    for x in range (0, 3):
        y = x * 3
        if (board[y] != Cell.EMPTY and board[y] == board[(y + 1)] and board[y] == board[(y + 2)]) :
            return True
        if (board[x] != Cell.EMPTY and board[x] == board[(x + 3)] and board[x] == board[(x + 6)]) :
            return True

    if((board[0] != Cell.EMPTY and board[0] == board[4] and board[0] == board[8]) or
       (board[2] != Cell.EMPTY and board[2] == board[4] and board[4] == board[6])) :
        return True

    return False

def isValid(board):
    # Count number of 'X' and 'O' in the given board
    firstPlayerCount = board.count(Cell.FIRST_PLAYER)
    secondPlayerCount = board.count(Cell.SECOND_PLAYER)

    # Board can be valid only if either xCount and oCount
    # is same or xount is one more than oCount
    if (firstPlayerCount == secondPlayerCount or firstPlayerCount == secondPlayerCount + 1):
        # Check if gameOver then permutation is not needed
        if (isGameOver(board)):
            return False

        # If counts are correct and game isn't over
        return True

    return False

def byteifyPossibility(board):
    return [(1 if cell == Cell.FIRST_PLAYER else 0) for cell in board] + [(1 if cell == Cell.SECOND_PLAYER else 0) for cell in board]

valid_possibilities = [byteifyPossibility(board) for board in all_possibilities if isValid(board)]
print(len(valid_possibilities))
