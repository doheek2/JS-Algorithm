function solution(str1, str2) {
  const splitString = str => {
    const arr = [];
    for(let i = 0; i < str.length - 1; i++) {
      const node = str.substr(i, 2);
      if(node.match(/[A-Za-z]{2}/)) {
        arr.push(node.toLowerCase());
      }
    }
    return arr;
  };

  const arr1 = splitString(str1);
  const arr2 = splitString(str2);
  const set = new Set([...arr1, ...arr2]);
  let union = 0, intersection = 0;

  set.forEach(item => {
    const has1 = arr1.filter(x => x === item).length;
    const has2 = arr2.filter(x => x === item).length;
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  });
  return union === 0 ? 65536 : Math.floor(intersection / union * 65536);
}