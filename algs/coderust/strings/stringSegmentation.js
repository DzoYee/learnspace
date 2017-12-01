function stringSegmentation(dictionary, string) {
  for (var i = 1; i <= string.length; i++) {
    if (hash[string.substr(0, i)]) {
      if (i === string.length) {
        return true;
      }
      if (stringSegmentation(dictionary, string.substr(i, string.length))) {
        return true;
      }
    }
  }
  return false;
}

var hash = {
  'apple': true,
  'pear': true,
  'pier': true,
  'pie': true
}

console.log(stringSegmentation(hash, "applepierpie"));