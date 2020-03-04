function bin2dec() {
  const binField = document.getElementById("binField");
  const decField = document.getElementById("decField");
  const binDigits = binField.value.toString().split("");

  let result = 0;
  let powerCounter;
  for (let i = 0; i < binDigits.length; i++) {
    powerCounter = binDigits.length - 1 - i;
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
  decField.value = result;
  return result;
}

function dec2bin() {
  const binField = document.getElementById("binField");
  const decField = document.getElementById("decField");

  let decVal = decField.value;
  let binNum = [];
  let result;

  // Byte counter
  let bytesNum = Math.floor(decVal / 256) + 1;

  // Start from power n
  let powerCounter = bytesNum * 8 - 1;

  // console.log("Start subtracting from: " + Math.pow(2, powerCounter));
  for (bytesNum; bytesNum >= 1; bytesNum--) {
    for (powerCounter; powerCounter >= 0; powerCounter--) {
      if (decVal - Math.pow(2, powerCounter) >= 0) {
        decVal = decVal - Math.pow(2, powerCounter);
        binNum.push(1);
      }
      // Don't add unnecessary zeros to the beginning
      else if (binNum.length !== 0) {
        binNum.push(0);
      }
    }
  }
  result = binNum.join("");
  binField.value = result;
  return result;
}
