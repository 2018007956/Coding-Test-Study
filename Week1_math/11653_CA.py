def factorization(x):
    d = 2
    while d <= x:
        if x%d==0:
            print(d)
            x = x/d 
        else:
            d=d+1

N = int(input())
factorization(N)