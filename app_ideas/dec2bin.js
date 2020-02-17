function dec2bin(decInput) {
  // Variables
  let decNum = decInput;
  let binNum = [];
  let binOut = 0;
  let powerCounter = 0;
  let bytesNum = 1;

  // Byte counter
  bytesNum += Math.floor(decInput / 256);
  console.log("Number of bytes: " + bytesNum);
  // Start from power n
  powerCounter = bytesNum * 8 - 1;
  console.log("Start subtracting from: " + Math.pow(2, powerCounter));
  for (bytesNum; bytesNum >= 1; bytesNum--) {
    for (powerCounter; powerCounter >= 0; powerCounter--) {
      if (decNum - Math.pow(2, powerCounter) >= 0) {
        decNum = decNum - Math.pow(2, powerCounter);
        binNum.push(1);
      }
      else {
        binNum.push(0);
      }
    }
  }
  binOut = binNum.join("");
  console.log("Result is: " + binOut);
  return binOut;
}

dec2bin(338);
