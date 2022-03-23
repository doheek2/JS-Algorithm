function solution(a, b) {
    let answer = 0;
    if(a === b) {
        return a;
    } else {
        if(a > b) {
            let temp = a;
            a = b;
            b = temp;
        }
        for(let i = a; i <= b; i++) {
            answer += i;
        }
        return answer;
    }
}

/*
function solution(a, b) {
    let result = 0;
    return (a + b) * (Math.abs(b - a) + 1) / 2;
}
*/