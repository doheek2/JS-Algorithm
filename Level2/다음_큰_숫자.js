function solution(n) {
  const oneLength = n.toString(2).split('1').length - 1;
  let temp = 0;
  do {
    n += 1;
    temp = n.toString(2).split('1').length - 1;
  } while(oneLength !== temp)
  return n;
}