function solution(s) {
  let answer = [];
  let sList = s.replace("{{", "").replace("}}", "").split("},{");
  let setList = [];

  sList.map(v => setList.push(v.split(",")));
  setList.sort((a, b) => {
    if(a.length > b.length) {
        return 1;
    } else {
        return -1;
    }
  });
  setList.map(v => { v.map(a => answer.push(parseInt(a))) });
  return [...new Set(answer)];
}