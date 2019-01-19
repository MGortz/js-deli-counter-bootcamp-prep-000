function takeANumber(currentLine, newCustomer) {
  currentLine.push(`${newCustomer}`);
  if (currentLine.length === 0) {
  return `Welcome, ${newCustomer}. You are number 1 in line.`;
  } else {
    return `Welcome, ${newCustomer}. You are number ${currentLine.length} in line.`;
  }
}

function nowServing(currentLine) {
  if (currentLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
      return `Currently serving ${currentLine.splice(0, 1)}.`}
}

function currentLine(currentLine) {
  if (currentLine.length === 0) {
    return "The line is currently empty.";
  } else if (currentLine.length > 0) {
    for (var i = 1; i === currentLine.length; i++) {
      var newArray = [];
      newArray.push(`${currentLine.join(i + 1)}`);
    }
    return newArray;
  }
}

      