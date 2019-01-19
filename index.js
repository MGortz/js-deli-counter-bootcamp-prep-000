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
  var lineArray = [];
  if (currentLine.length === 0) {
    return "The line is currently empty.";
  } else if (currentLine.length === 1) {
    return `The line is currently: 1. ${currentLine[0]}`;
  }
}

      