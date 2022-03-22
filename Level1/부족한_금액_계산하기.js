function solution(price, money, count) {
    let answer = 0;
    for(let i = 1; i <= count; i++) {
        answer += price * i;
    }
    return money > answer ? 0 : answer-money;
}

// 가우스 공식 (등차수열의 합)
/*
function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}
*/