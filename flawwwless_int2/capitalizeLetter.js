function capitalizeLetters(str) {
  // Split input to words
  const wordArray = str.split(" ");
	// Declare final output
	let capStr = "";
  // Go through each word
  for (let i = 0; i < wordArray.length; i++) {
    // Split current word in cycle
    let currentWord = wordArray[i].split("");
    // Capitalize first letter
    let capLetter = currentWord[0].toUpperCase();
		// Delete original first letter
		currentWord[0] = "";
    // Join them to a string
		let finalWord = capLetter + currentWord.join("");
		capStr += finalWord + " ";
  }
	capStr = capStr.split("");
  // Get rid of last space
  capStr[capStr.length - 1] = "";
  capStr = capStr.join("");
  return capStr;
}

capitalizeLetters("james bond");
