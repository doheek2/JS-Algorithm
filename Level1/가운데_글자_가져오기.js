function solution(s) {
    let strleng = Math.floor(s.length / 2);
    return s.length % 2 ? s.substr(strleng, 1) : s.substr(strleng-1, 2);
}