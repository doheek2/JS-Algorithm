// 문자풀이
function solution(n) {
    return String(n).split('').map((x) => Number(x)).reverse();
}

// 숫자풀이
/*
function solution(n) {
    let arr = [];

    do {
        arr.push(n % 10);
        n = Math.floor(n / 10);
    } while (n > 0);

    return arr;
}
*/