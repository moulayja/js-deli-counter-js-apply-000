// 1) Build a function that a new customer will use when entering the deli. The function, takeANumber, should accept two paramaters: the current line of people, along with the new person's name. The function should return a welcome message including the new person's position in line, such as "Welcome, Ada. You are number 1 in line.". And don't go being too programmer-y and give them their index. These are normal people. If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.


var katzDeliLine = [];
var inLine = [];

const takeANumber = (katzDeliLine, name) => {
  katzDeliLine.push(name);
  var length = katzDeliLine.length;
  if (length >= 7) {
    return `Welcome, ${name}. You are number 6 in line.`
  } else {
    return `Welcome, ${name}. You are number ${length} in line.`
  }

}