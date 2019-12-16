function swapCase(str) {
  const chars = str.split("");
  for (let i = 0; i < chars.length; i++) {
    // if current char is already uppercase
    if (chars[i] === chars[i].toUpperCase) {
      chars[i] = chars[i].toLowerCase;
    }
    else if (chars[i] === chars[i].toLowerCase) {
      chars[i] = chars[i].toUpperCase;
    }
  }
}
