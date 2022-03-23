function solution(a, b) {
    let dayOfTheWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    b += 4;
    for(let i = 0; i < a-1; i++) {
        b += days[i];
   }
    return dayOfTheWeek[b % 7];
}