function xmlToTree(str) {
  var stack = [];
  var value;
  var parentNode;
  var tempNode

  for (var i = 0; i < str.length; i++) {
    if (str[i] === '<') {
      if (str[i+1] === '/') {  
        value = findTag(str, i+1);
        i+= value.length+2;
        stack.pop();
      } else {
        value = findTag(str, i);
        i+= value.length+1;
        if (stack.length === 0) {
          tempNode = new Node(value);
          parentNode = tempNode;
        }
        if (stack.length !== 0) {
          tempNode = new Node(value);
          stack[stack.length - 1].children.push(tempNode);
        } 
        stack.push(tempNode);
      }
    } else {
      value = findWord(str, i);
      stack[stack.length - 1].children.push(new Node(value));
      i+= value.length-1;
    }
  }
  return parentNode;
}

function findTag(str, index) {
  var startIndex = index + 1;
  var readIndex = startIndex;

  while (true) {
    if (str[readIndex] !== '>') {
      readIndex++;
    } else {
      return str.slice(startIndex, readIndex);
    }
  }
}

function findWord(str, index) {
  var startIndex = index + 1;
  var readIndex = startIndex;

  while (true) {
    if (str[readIndex] !== '<') {
      readIndex++;
    } else {
      return str.slice(index, readIndex);
    }
  }  
}

function Node(val) {
  this.val = val;
  this.children = [];
}


console.log(xmlToTree('<html><dog>fuck</dog></html>'));