function arrayDiff(a, b) {
  let result = [...a];

  for (let i = 0; i < a.length; i++) {
    for (let o = 0; o < b.length; o++) {
      // Check for matching items in a and b array
      // Remove, if result contains it
      if (a[i] === b[o] && result.indexOf(b[o]) >= 0) {
        result.splice(result.indexOf(b[o]), 1);
      }
    }
  }
  return result;
}

arrayDiff([-17,5,16,15,9,-3,-17,8,19,11],[-3,19,-17,-17,15,9,5,8]);
