import time
import math
print("\nWelcome to the Butter Fat Calculator!\n\n")
time.sleep(1)

print("Enter the target butterfat:\n")
targetBF = float(input())
print("Enter the first ingredient's butterfat:\n")
ingOneBF = float(input())
print("\nEnter the second ingredient's butterfat:\n")
ingTwoBF = float(input())
print("Enter the batch amount:")
batchAmount = float(input())


# x + y = 1    x and y are the percentage of both ingredients. They must add up to 1 (aka 100%)
# Ax + By = C

# x = 1 - y    We can now substitute and solve for y
# A(1-y) + By = C
# A - Ay + By = C
# y(B - A) = C - A Move A to other side and then factor out a y
# y = (C - A)/(B - A)

# x = 1 - y     

#This is our y
amountTwo = abs((targetBF - ingOneBF)/(ingTwoBF - ingOneBF))  #Make sure its positive

amountOne = 1 - amountTwo #The remainder is the other ingredient

amountOne = amountOne*batchAmount #Multiply by the batch amount to get the amount for the batch
amountTwo = amountTwo*batchAmount #Ditto

print("Caclulating...")
time.sleep(1.5)

print("\n==================================\nTarget BF:", targetBF, "%  Amount: ", batchAmount, "\n==================================\n")
print("\nIngredient 1    BF: ", ingOneBF, "    Amount ", round(amountOne), "\n")
print("\nIngredient 2    BF: ", ingTwoBF, "    Amount ", round(amountTwo))
