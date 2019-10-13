let sum = 0;
let digits;

function sumOfDigits(number) {
  sum = 0;
  if (typeof number == "number") {
    // Input type is number
    digits = number.toString().split("");
    for (let i = 0; i < digits.length; i++) {
      sum += Number(digits[i]);
    }
    return "The sum is: " +sum;
  }
  else {
    return "Given input is not a number";
    }
  }

sumOfDigits(123);
