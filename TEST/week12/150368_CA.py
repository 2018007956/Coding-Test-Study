def solution(users, emoticons):
    answer = []
    dcPercent = {40:[], 30:[], 20:[], 10:[]}
    
    for p in dcPercent:
        for price in emoticons:
            dcPercent[p].append(price*(100-p)//100)
    print(dcPercent)
    
      
    return answer