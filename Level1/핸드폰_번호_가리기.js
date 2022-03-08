function solution(phone_number) {
    const num = phone_number.match(/.{4}$/);
    const changeLength = phone_number.length-4;
    return '*'.repeat(changeLength) + num[0];
}

// 정규식 공부하기 !
/*
function solution(phone_number) {
    return phone_number.replace(/\d(?=\d{4})/g, "*");
}
*/

/*
function solution(phone_number){
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}
*/