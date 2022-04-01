function solution(n, lost, reserve) {
  reserve.sort();
  lost.sort();
  const res = reserve.filter(x => !lost.includes(x));
  const los = lost.filter(y => !reserve.includes(y));
  for(let i in res) {
    for(let j in los) {
        if(los[j] === res[i]-1 || los[j] === res[i]+1) {
            los[j] = -1;
            break;
        }
    }
  }
  return n - los.filter(x => x !== -1).length;
}