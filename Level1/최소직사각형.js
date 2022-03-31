function solution(sizes) {
  const rotate = sizes.map(([v, h]) => v > h ? [v, h] : [h, v]);
  let maxSize = [0, 0];
  rotate.forEach(([v, h]) => {
    if(v > maxSize[0]) maxSize[0] = v;
    if(h > maxSize[1]) maxSize[1] = h;
  });
  return maxSize[0] * maxSize[1];
}