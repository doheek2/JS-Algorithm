function solution(id_list, report, k) {
  const set = [...new Set(report)];
  let answer = new Array(id_list.length);
  answer.fill(0);
  let reportList = [];
  let toBeReportCount = [];

  id_list.map(v => toBeReportCount.push([v, 0]));

  set.map(v => {
    const [reportId, toBeReportedId] = v.split(' ');
    reportList.push([reportId, toBeReportedId]);
    toBeReportCount.find(x => {
        if(x[0] === toBeReportedId) x[1]++;
    });
  });

  id_list.map((v, i) => {
    reportList.filter(x => x[0] === v).map((a, b) => {
        toBeReportCount.filter(y => y[0] === a[1]).map(z => {
            if(z[1] >= k) answer[i]++;
        });
    });
  });
  return answer;
}