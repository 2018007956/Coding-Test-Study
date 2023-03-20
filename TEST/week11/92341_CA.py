import math

def calculate_time(result_time, car, out_time, in_time):
    h,m = out_time.split(':')
    out_time = int(h) * 60 + int(m)
    h,m = in_time.split(':')
    in_time = int(h) * 60 + int(m)
    time = out_time - in_time
    
    prev_car = [x[0] for x in result_time]
    if car in prev_car:
        idx = prev_car.index(car)
        result_time[idx][1] += time
    else:
        result_time.append([car, time])
    return result_time
    
    
def solution(fees, records):
    IN_info = []
    result_time = []
    result_fee = []
    for case in records:
        time, car, chk = case.split()
        if chk == 'IN':
            IN_info.append([car, time])
        else:            
            cars = [x[0] for x in IN_info]
            idx = cars.index(car)
            calculate_time(result_time, car, time, IN_info[idx][1])
            IN_info.pop(idx)
    
    if IN_info:
        for case in IN_info:
            car, time = case
            calculate_time(result_time, car, "23:59", time)
    
    print(result_time)
    for car, time in result_time:
        if time <= fees[0]:
            fee = fees[1]
        else:
            fee = fees[1] + math.ceil(time/fees[2]) * fees[3]    
        result_fee.append([car, fee])
    print(result_fee)
    result_fee.sort()
    return [x[1] for x in result_fee]

print(solution([180, 5000, 10, 600], ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"]))

'''
##### 푸는중 #####

나름대로 조건 다 맞게 구현했는데
계산된 요금 숫자가 다름
'''