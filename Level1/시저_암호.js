function solution(s, n) {
  return s.split('').map(val => {
      if(val === ' ') return val;
      const numCode = val.charCodeAt();
      return val.toUpperCase().charCodeAt() + n > 90 
          ? String.fromCharCode(numCode - 26 + n)
          : String.fromCharCode(numCode + n)
  }).join('')
}