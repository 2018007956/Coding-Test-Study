function solution(N, number) {
    const set = new Array(8).fill().map(() => new Set());
    for (let i = 0; i < 8; i++) {
        set[i].add(Number(`${N}`.repeat(i + 1)));
        /*
            set = [
                    Set(1) { N },
                    Set(1) { NN },
                    Set(1) { NNN },
                    Set(1) { NNNN },
                    Set(1) { NNNNN },
                    Set(1) { NNNNNN },
                    Set(1) { NNNNNNN },
                    Set(1) { NNNNNNNN }
                ]
        */

        for (let j = 0; j < i; j++) { // 생성된 Set을 0부터 순차적으로 순회
            for (const arg1 of set[j]) { // j번째 Set과 그 나머지 Set(i-j-1)에 대한 사칙연산 조합을 계산
                for (const arg2 of set[i - j - 1]) {
                    set[i].add(arg1 + arg2);
                    set[i].add(arg1 - arg2);
                    set[i].add(arg1 * arg2);
                    set[i].add(Math.floor(arg1 / arg2));
                }
            }
        }
        if (set[i].has(number)) return i + 1; // 8번 내에 number가 있으면 return
    }
    return -1;
  }