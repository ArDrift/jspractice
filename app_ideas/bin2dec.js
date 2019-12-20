function bin2dec() {
  const inputField = document.getElementById("binInput");
  const binInput = inputField.value;
  const binDigits = binInput.toString().split("");
  let result = 0;
  const resultField = document.getElementById("result");
  for (let i = 0; i < binDigits.length; i++) {
    let powerCounter = binDigits.length - 1 - i;
    // if digit is 1 add its decimal value to result
    if (binDigits[i] === "1") {
      result += Math.pow(2, powerCounter);
    }
    // if digit is neither a 1 nor a 0, e.g. not binary
    else if (binDigits[i] !== "0") {
      console.log("Error, input is not a binary number!");
      result = "Error, input is not a binary number!";
    }
  }
  console.log(result);
  resultField.value = result;
  return result;
}
