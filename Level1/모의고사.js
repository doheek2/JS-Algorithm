function solution(answers) {
  let answer = [];
  let correctArr = [0, 0, 0];
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  answers.map((v, i) => {
    if(one[i % 5] === v) correctArr[0]++;
    if(two[i % 8] === v) correctArr[1]++;
    if(three[i % 10] === v) correctArr[2]++;
  });
  const highScore = Math.max(...correctArr);
  correctArr.map((v, i) => { if(v === highScore) answer.push(i+1) });
  return answer;
}