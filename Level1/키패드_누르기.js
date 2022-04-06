function solution(numbers, hand) {
  let answer = '';
  const keys = {
    1: [0, 0], 2: [0, 1], 3: [0, 2],
    4: [1, 0], 5: [1, 1], 6: [1, 2],
    7: [2, 0], 8: [2, 1], 9: [2, 2],
    '*': [3, 0], 0: [3, 1], '#': [3, 2]
  };

  let leftHand = keys['*'];
  let rightHand = keys['#'];

  numbers.map(v => {
    let isLeft = false;
    if(v === 1 || v === 4 || v === 7) {
      isLeft = true;
    } else if(v === 3 || v === 6 || v === 9) {

    } else {
      const leftDistance = getDistance(leftHand, keys[v]);
      const rightDistance = getDistance(rightHand, keys[v]);

      if(leftDistance === rightDistance) {
        if(hand === 'left') isLeft = true;
      } else if(leftDistance < rightDistance) {
        isLeft = true;
      }
    }

    if(isLeft) {
      leftHand = keys[v];
      answer += 'L';
    } else {
      rightHand = keys[v];
      answer += 'R';
    }
  });

  return answer;
}

const getDistance = (start, target) => {
  let sum = 0;
  sum += Math.max(start[0], target[0]) - Math.min(start[0], target[0]);
  sum += Math.max(start[1], target[1]) - Math.min(start[1], target[1]);
  return sum;
};