function capitalizeLetters(str) {
  // Declare variables inside function
	const words = str.split(" ");
	let capitalWords = "";
	// words counter
	for (let i = 0; i < words.length; i++) {
	  // Split current word to array
	  let wordLetters = words[i].split("");
	  // Capitalize current word
	  wordLetters[0] = wordLetters[0].toUpperCase();
	  // Join back to string
	  wordLetters = wordLetters.join("");
	  // Add each word to final result separated with space
	  capitalWords += wordLetters + " ";
	}
	// Delete last space
	capitalWords = capitalWords.split("");
	capitalWords[capitalWords.length - 1] = "";
	capitalWords = capitalWords.join("");
	console.log(capitalWords);
	return capitalWords;
}

capitalizeLetters("james bond");
