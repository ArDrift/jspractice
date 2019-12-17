function bin2dec(binInput) {
  const binDigits = binInput.split("");
  let result = 0;
  for (let i = 0; i < binDigits.length; i++) {
    let powerCounter = binDigits.length - 1 - i;
    // if digit is 1 add its decimal value to result
    if (binDigits[i] === "1") {
      result += Math.pow(2, powerCounter);
    }
    // if digit is neither a 1 nor a 0, e.g. not binary
    else if (binDigits[i] !== "0") {
      console.log("Error, input is not a binary number!");
      return "Error, input is not a binary number!";
    }
  }
  console.log(result);
  return result;
}

bin2dec("00000001");
