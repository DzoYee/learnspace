var thing = function(string) {
  var results = [];
  var stackMap = {
    '(' : 1,
    ')' : -1
  };
  var length = 0;

  var recursion = function(count, bank, string) {
    console.log(count, bank, string);
    if (count < 0 || (count > 0 && bank.length === 0)) { return };
    if (count === 0 && bank.length === 0) {
      if (results.length === 0 || results[0].length === string.length) {
        results.push(string);
      } else if (results[0].length < string.length) {
        results = [];
        results.push(string);
      }
      return;
    }

    var subject = bank[0];

    recursion(count + stackMap[subject], bank.slice(1,bank.length), string + subject);
    recursion(count, bank.slice(1,bank.length), string);

  };
  recursion(0, string.split(""), "");

  return results;
};

console.log(thing("()())()"));
