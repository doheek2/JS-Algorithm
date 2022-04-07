function solution(s) {
  let count = 0, zeroRemove = 0;
  do {
    const zeroCount = s.split("0").length - 1;
    const oneCount = s.split("1").length - 1;
    count++;
    zeroRemove += zeroCount;
    s = oneCount.toString(2);
  } while(s !== "1")
  return [count, zeroRemove];
}