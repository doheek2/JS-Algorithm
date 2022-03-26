function solution(absolutes, signs) {
  let result = 0;
  absolutes.map((val, idx) => signs[idx] ? result += val : result += (-val));
  return result;
}

/*
function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}
*/