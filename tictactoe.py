# Special thanks to https://gist.github.com/horstjens/4adc56d3de6c2392f440 for this code!

from enum import Enum
class Cell(Enum):
    EMPTY = ' '
    FIRST_PLAYER = 'X'
    SECOND_PLAYER = 'O'

choices = []

for x in range (0, 9) :
    choices.append(Cell.EMPTY)

playerTurn = True
winner = False

def printBoard() :
    print( '\n -----')
    print( '|' + choices[0].value + '|' + choices[1].value + '|' + choices[2].value + '|')
    print( ' -----')
    print( '|' + choices[3].value + '|' + choices[4].value + '|' + choices[5].value + '|')
    print( ' -----')
    print( '|' + choices[6].value + '|' + choices[7].value + '|' + choices[8].value + '|')
    print( ' -----\n')

while not winner :
    printBoard()

    if playerTurn :
        print( "Your turn:")
    else :
        print( "NN Turn:")

    try:
        choice = int(input(">> "))
    except:
        print("please enter a valid field")
        continue
    if choices[choice - 1] == Cell.FIRST_PLAYER or choices [choice-1] == Cell.SECOND_PLAYER:
        print("illegal move, plase try again")
        continue

    if playerTurn :
        choices[choice - 1] = Cell.FIRST_PLAYER
    else :
        choices[choice - 1] = Cell.SECOND_PLAYER

    playerTurn = not playerTurn

    for x in range (0, 3) :
        y = x * 3
        if (choices[y] != Cell.EMPTY and choices[y] == choices[(y + 1)] and choices[y] == choices[(y + 2)]) :
            winner = True
            printBoard()
        if (choices[x] != Cell.EMPTY and choices[x] == choices[(x + 3)] and choices[x] == choices[(x + 6)]) :
            winner = True
            printBoard()

    if((choices[0] != Cell.EMPTY and choices[0] == choices[4] and choices[0] == choices[8]) or
       (choices[2] != Cell.EMPTY and choices[2] == choices[4] and choices[4] == choices[6])) :
        winner = True
        printBoard()

print ("Player " + str(int(playerTurn + 1)) + " wins!\n")
