function reverseInteger(integer) {
  revDigits = integer.toString().split("").reverse().join("");
  revInt = parseInt(revDigits, 10);
  return revInt;
}

reverseInteger(2019);
