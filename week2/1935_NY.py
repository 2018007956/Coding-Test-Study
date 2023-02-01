# 후위표기식 2

n = int(input())
formula = list(input())
number = list()
for i in range(0, n):
    number.append(int(input()))

# Capital Alphabet into number
for i in range(0, len(formula)):
    if formula[i].isalpha():
        formula[i] = ord(formula[i]) - 65

myStack = list()
for j in range(0, len(formula)):
    if isinstance(formula[j], int):
        myStack.append(number[formula[j]])
    
    else:
        a = myStack.pop()
        b = myStack.pop()
        if formula[j] == '+':
            calNum = b + a
        if formula[j] == '-':
            calNum = b - a
        if formula[j] == '*':
            calNum = b * a
        if formula[j] == '/':
            calNum = b / a
        
        myStack.append(calNum)

print("{:.2f}".format(myStack.pop()))