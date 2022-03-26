function solution(x) {
  let num = String(x).split('').map(a => Number(a)).reduce((acc, cur) => acc + cur);
  return x % num === 0 ? true : false;
}

/*
function solution(x) {
  return x % (String(x).split('').reduce((acc, cur) => +cur + +acc)) === 0 ? true : false;
}
*/