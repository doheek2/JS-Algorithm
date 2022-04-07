function solution(numbers) {
  let answer = [];
  const nums = numbers.split('');

  const isPrimeNum = num => {
    if(num <= 1) return false;
    for(let i = 2; i*i <= num; i++) {
      if(num % i === 0) return false;
    }
    return true;
  }

  const getPermutation = (arr, fixed) => {
    if(arr.length >= 1) {
      arr.map((v, i) => {
        const newNum = fixed + v;
        const copyArr = [...arr];
        copyArr.splice(i, 1);
        if(!answer.includes(+newNum) && isPrimeNum(+newNum)) answer.push(+newNum);
        getPermutation(copyArr, newNum);
      });
    }
  };

  getPermutation(nums, '');
  return answer.length;
}
