#!/usr/bin/python3
for i in range(0, 10):
    for j in range(0, 10):
        if (i, j) != (9, 9):
            print("{}{}".format(i, j), end=", ")
        elif (i, j) == (9, 9):
            print("{}{}\n".format(i, j))
