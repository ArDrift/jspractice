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
      switch (true) {
        case (decNum - Math.pow(2, powerCounter) > 0):
          decNum = decNum - Math.pow(2, powerCounter);
          binNum.unshift(1);
          console.log(binNum);
          break;
        case 0:
          console.log(binNum);
          break;
        case (decNum - Math.pow(2, powerCounter) < 0):
          binNum.unshift(0);
          console.log(binNum);
          break;
      }
      return binNum;
    }
  }
}

dec2bin(255);