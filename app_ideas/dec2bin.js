function dec2bin(decInput) {
  // No. of bytes needed
  let binNum = [];
  let decNum = decInput;
  const byteNum = Math.floor(decInput / 256) + 1;
  let powerCounter = 0;
  console.log("Number of bytes: " + byteNum);
  // Counter for each byte
  for (let i = 0; i < byteNum; i++) {
    // 2^x needed to be subtracted
    powerCounter = byteNum * 8 - 1;
    console.log("Power counter start: " + powerCounter);
    for (powerCounter; powerCounter >= 0; powerCounter--) {
      // If result is more than zero, bit is 1
      if (decNum - Math.pow(2, powerCounter) > 0) {
        decNum = decNum - Math.pow(2, powerCounter);
        //console.log(decNum);
      }
      // If result is less than zero, bit is 0
      else if (decNum - Math.pow(2, powerCounter) < 0) {
        binNum.push(0);
        //console.log(decNum);
      }
      // If result is 0, final result is computed
      else {
        binNum.push(1);
        //console.log(binNum);
      }
    }
    binNum = binNum.join("");
    console.log("Result is: " +binNum);
    return binNum;
  }
}

dec2bin(6);