N = int(input())
s = input()

d = {}
for i in range(len(s)):
    if s[i].isalpha() and s[i] not in d.keys():
        d[s[i]] = int(input())
    
# alphabet -> num
arr = []
for i in range(len(s)):
    if s[i].isalpha():
        arr.append(d[s[i]])
    else:
        arr.append(s[i])

cnt = 1
while len(arr)>2:
    try:
        x = int(arr[cnt])
    except: 
        # 연산자일 경우
        arr[cnt-2] = eval(str(arr[cnt-2])+arr[cnt]+str(arr[cnt-1]))
        del arr[cnt]
        del arr[cnt-1]
        cnt = 0
    cnt += 1
    
print("{:.2f}".format(arr[0]))

'''
# string연산자로 어떻게 연산하지? -> 문자열로된 식을 계산하는 함수: eval

print(str(3)+'+'+str(5))
print(eval(str(3)+'+'+str(5)))

* TypeError: 'str' object does not support item assignment
s = 'abcd'
s[2] = 'z' --> Error

s=s[:cnt-2]+str(eval(s[cnt-2]+s[cnt]+s[cnt-1]))+s[cnt+1:]
이렇게하면 게산 결과가 소수인 경우 (0.8) 0, ., 8이 따로 인식될듯
str이 아니라 int 단위로 인식해야 되긴 할 것 같아

print(int('0.8'))
-> ValueError: invalid literal for int() with base 10: '0.8'
배열에 넣을땐 int로 넣고(eval계산결과), eval계산 시 str로 바꿔 계산함 

3을 3.0이나 3.00으로 출력하는 방법: 문자열 포매팅 String Formatting
print("{:.2f}".format(3))

똑같은 알파벳 입력에 대해서: dict()으로 입력 받음
'''
