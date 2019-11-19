let counter_1 = 0;
let counter_2 = 1;
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
        counter_1++;
      }
      // If counter is greater than one it's a repeated char
      if (counter_2 < counter_1) {
        mostRepeated = strArray[counter_2];
      }
    }
  }
  counter_1 = 0;
  console.log(mostRepeated);
  return mostRepeated;
}

maxCharacter("canada");

