function swapCase(str) {
  // split input to characters
  let chars = str.split("");
  for (let i = 0; i < chars.length; i++) {
    // if current char is already upper case
    if (chars[i] === chars[i].toUpperCase()) {
      chars[i] = chars[i].toLowerCase();
    }
    // if current char is already lower case
    else if (chars[i] === chars[i].toLowerCase()) {
      chars[i] = chars[i].toUpperCase();
    }
  }
  chars = chars.join("");
  console.log(chars);
  return chars;
}

swapCase("Hello World");
