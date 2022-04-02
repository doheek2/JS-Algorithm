function solution(n) {
  const s = new Set();
  for(let i = 2; i <= n; i++) s.add(i);
  for(let j = 2; j < Math.sqrt(n); j++) {
    if(s.has(j)) {
        for(let z = j*2; z <= n; z += j) s.delete(z);
    }
  }
  return s.size;
}