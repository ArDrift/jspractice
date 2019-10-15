function isPalindrome(inputString) {
  noSpace = inputString.split(" ").join("");
  revInput = noSpace.split("").reverse().join("");
  if (revInput === noSpace) {
    return "yes";
  }
  else {
    return "no";
  }
}

isPalindrome("a santa at nasa");
