function solution(N, stages) {
  let answer = [];
  let clearPlayer = stages.length;
  for(let i = 1; i <= N; i++) {
    const notClearPlayer = stages.filter(x => x === i).length;
    answer.push([i, notClearPlayer / clearPlayer]);
    clearPlayer = clearPlayer - notClearPlayer;
  }
  return answer.sort((a, b) => b[1] - a[1]).map(v => v[0]);
}