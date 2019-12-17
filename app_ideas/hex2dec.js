function hex2dec(hexInput) {
  const hexDigits = hexInput.split("");
  let result = 0;
  for (let i = 0; i < hexDigits.length; i++) {
    let powerCounter = hexDigits.length - 1 - i;
    // if digit is decimal number
    if (isNaN(parseInt(hexDigits[i])) === false ) {
      result += hexDigits[i] * Math.pow(16, powerCounter);
    }
    else {
      switch (hexDigits[i].toUpperCase()) {
        case "A":
          result += 10 * Math.pow(16, powerCounter);
        break;
        case "B":
          result += 11 * Math.pow(16, powerCounter);
        break;
        case "C":
          result += 12 * Math.pow(16, powerCounter);
        break;
        case "D":
          result += 13 * Math.pow(16, powerCounter);
        break;
        case "E":
          result += 14 * Math.pow(16, powerCounter);
        break;
        case "F":
          result += 15 * Math.pow(16, powerCounter);
        break;
        default:
          console.log("Given input is not a hexadecimal number!");
          return "Given input is not a hexadecimal number!";
      }
    }
  }
  console.log(result);
  return result;
}

hex2dec("100");
