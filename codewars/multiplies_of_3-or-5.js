function solution(number){
  let sum = 0;

  // Cycle until i's 3 multiply remains less than number
  for (i = 1; i * 3 < number; i++) {
    sum += i * 3;

    // If i * 5 remains less than number and not a multiply of 3
    if (i * 5 < number && i * 5 % 3 !== 0) {
      sum += i * 5;
    }
  }
  return sum;
}

solution(10);
