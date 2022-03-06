function solution(numbers) {
    var answer = [];
    for(let a = 0; a < numbers.length-1; a++) {
        for(let b = a+1; b < numbers.length; b++) {
            const sum = numbers[a] + numbers[b];
            if(answer.indexOf(sum) < 0) {
                answer.push(sum);
            }
        }
    }
    return answer.sort((a, b) => a - b);
}

// Set 객체로 배열 중복 원소 제거 !
/*
function solution(numbers) {
    const temp = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }

    const answer = [...new Set(temp)]

    return answer.sort((a, b) => a - b)
}
*/