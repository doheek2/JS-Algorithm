function solution(arr) {
    arr.splice(arr.findIndex((a) => a == Math.min(...arr)), 1);
    return arr.length < 0 ? arr = [-1] : arr;
}