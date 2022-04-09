function solution(priorities, location) {
  let max = Math.max(...priorities);
  let answer = 1;

  while(priorities.length !== 0) {
    if(priorities[0] === max) {
      if(location === 0) return answer;
      priorities.shift();
      answer++;
      max = Math.max(...priorities);
    } else {
      priorities.push(priorities.shift());
    }

    if(location !== 0) location--;
    else location = priorities.length - 1;
  }
  return -1;
}