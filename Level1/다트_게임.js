function solution(dartResult) {
  let score = '';
  const scoreArr = [];
  const bonusArr = ["S", "D", "T"];

  for(let i = 0; i < dartResult.length; i++) {
    const current = dartResult[i];
    if(bonusArr.includes(current)) {
      scoreArr.push(parseInt(score) ** (bonusArr.indexOf(current)+1));
      score = '';
    } else if(current === "#") {
        scoreArr[scoreArr.length - 1] *= -1;
    } else if(current === "*") {
        const scoareArrLength = scoreArr.length;
        if(scoareArrLength === 1) {
            scoreArr[0] *= 2;
        }
        else if(scoareArrLength > 1) {
            scoreArr[scoareArrLength - 1] *= 2;
            scoreArr[scoareArrLength - 2] *= 2;
        }
    } else {
        score += current;
    }
  }

  return scoreArr.reduce((acc, cur) => acc + cur);
}
