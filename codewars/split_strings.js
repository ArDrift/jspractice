function solution(str) {
  const splitStr = str.split("");

  // No. of sequences needed
  let seqs = Math.floor(splitStr.length / 2);
  let result = [];
  let charCounter = 0;
  let charsToAdd = "";

  if (splitStr.length % 2 === 1) {
    seqs += 1;
  }

  for (let i = 0; i < seqs; i++) {
    charCounter += 2;

    if (charCounter > splitStr.length) {
      charsToAdd = splitStr[charCounter - 2] + "_";
    }
    else {
      charsToAdd = splitStr[charCounter - 2] + splitStr[charCounter - 1];
    }
    result.push(charsToAdd);
  }
  return result;
}

solution("abc");
