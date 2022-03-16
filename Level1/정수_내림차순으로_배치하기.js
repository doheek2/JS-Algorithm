function solution(n) {
    return Number(String(n).split('').sort((x, y) => y - x).join(''));
}