function solution(record) {
  const users = {};
  const arr = [];
  const stateObj = {
    Enter: '님이 들어왔습니다.',
    Leave: '님이 나갔습니다.'
  };

  record.map(v => {
    const [state, uid, name] = v.split(' ');

    if(name) users[uid] = name;
    if(state !== 'Change') arr.push([state, uid]);
  });

  return arr.map(([state, uid]) => `${users[uid]}${stateObj[state]}`);
}