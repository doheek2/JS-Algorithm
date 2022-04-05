function solution(board, moves) {
  let box = [];
  let answer = 0;
  moves.map(v => {
    const doll = pickup(board, v-1);
    if(doll) {
      if(box[box.length-1] === doll) {
        box.pop();
        answer += 2;
      } else {
        box.push(doll);
      }
    }
  });
  return answer;
}

function pickup(board, order) {
  for(let i = 0; i < board.length; i++) {
    if(board[i][order] !== 0) {
      const temp = board[i][order];
      board[i][order] = 0;
      return temp;
    }
  }
}