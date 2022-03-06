function solution(arr1, arr2) {
    return arr1.map((arr, index) => arr.map((x, y) => x + arr2[index][y]));
}