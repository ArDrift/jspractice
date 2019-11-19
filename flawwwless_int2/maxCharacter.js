// Occurence counter
let occCounter = 0;
// Position counter
let posCounter = 1;
let mostRepeated;

function maxCharacter(str) {
  // Split input
  const strArray = str.split("");
  // Check each char
  for (let i = 0; i < strArray.length; i++) {
    // Loop through array for each char
    for (let j = i; j < strArray.length; j++) {
      // If same is found increase counter
      if (strArray[i] == strArray[j]) {
        occCounter++;
      }
      // If counter is greater than one it's a repeated char
      if (posCounter < occCounter) {
        posCounter = occCounter;
        mostRepeated = strArray[i];
      }
    }
    occCounter = 0;
  }
  console.log(mostRepeated);
  return mostRepeated;
}

maxCharacter("flawwwless");
