function solution(left, right) {
  let answer = 0;
  for(let i = left; i <= right; i++) {
    let count = 0;
    for(let y = 1; y <= i; y++) {
        if(i % y === 0) count++;
        if(i === y) {
            if(count % 2 === 0) answer += i;
            else answer -= i;
        }
    }
}
  return answer;
}

/*
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}
*/