# 절대값 힙

import sys
import heapq as hq

n = int(sys.stdin.readline().rstrip())
data = list()
for i in range(0, n):
    num = int(sys.stdin.readline().rstrip())
    
    if num != 0:
        hq.heappush(data, (abs(num), num))
    
    else:
        if len(data) == 0:
            print(0)
        
        else:
            print(hq.heappop(data)[1])


# def min_heapify(heap, index, heap_size):
#     minimum = index
#     left_index = 2*index + 1
#     right_index = 2*index + 2

#     if((left_index < heap_size) and (abs(heap[left_index]) < abs(heap[minimum]))):
#         minimum = left_index
    
#     elif((right_index < heap_size) and (abs(heap[right_index]) < abs(heap[minimum]))):
#         minimum = right_index
    
#     if (left_index < heap_size) and (abs(heap[left_index]) == abs(heap[minimum])) and (heap[left_index] < heap[minimum]):
#         minimum = left_index

#     if (right_index < heap_size) and (abs(heap[right_index]) == abs(heap[minimum])) and (heap[right_index] < heap[minimum]):
#         minimum = right_index

#     if minimum != index:
#         heap[minimum], heap[index] = heap[index], heap[minimum]
#         min_heapify(heap, minimum, heap_size)

# def min_heapsort(arr):
#     for i in range((len(arr)//2) - 1, -1, -1):
#         min_heapify(arr, i, len(arr))
    
#     for j in range(len(arr)-1, -1, -1):
#         arr[0], arr[j] = arr[j], arr[0]
#         min_heapify(arr, 0, len(arr))