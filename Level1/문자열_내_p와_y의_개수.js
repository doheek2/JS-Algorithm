function solution(s){
  let count = 0;
  s = s.toLowerCase();
  for(let i = 0; i < s.length; i++) {
    if(s[i] === 'p') count++;
    else if(s[i] === 'y') count --;
}
  return count === 0 ? true : false;
}

/*
function solution(s) {
  return s.toLowerCase().split('p').length === s.toLowerCase().split('y').length;
}
*/