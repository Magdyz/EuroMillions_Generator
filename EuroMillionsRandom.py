import random

# For EuroMillions five main numbers, between 1 and 50, and two Lucky Stars, between 1 and 12. The function takes 2 inputs mainNumbers,luckyStars

def generateNums(mainNumbers,luckyStars):
    newNum = []
    luckyNum = []
    for i in range(mainNumbers):
        newNum.append(random.randint(1,50))
    for i in range(luckyStars):
        num = random.randint(1,12)
        if num not in luckyNum:
            luckyNum.append(num)
        else:
            num = random.randint(1,12)
            luckyNum.append(num)
        
    return newNum+luckyNum


# print(generateNums(5,2))
