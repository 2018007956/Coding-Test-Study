def sum_num(s):
    tmp = 0
    for i in s:
        if i.isdigit():
            tmp += int(i)
    return tmp

N = int(input())
serial = [input() for _ in range(N)]
serial.sort(key= lambda x:(len(x), sum_num(x), x))
for s in serial:
    print(s)

'''
1. 길이가 짧은 것
2. 숫자의 합이 작은 것
3. 사전순

lambda x:(len(x),sum_num(x),x)
-> len(x) 로 길이를 맞추고나서 
   def sum_num(x)로 문자열 안의 숫자를 전부 더하는 함수를 작동한 후 
   사전순인 기본 sort(x)를 적용
'''