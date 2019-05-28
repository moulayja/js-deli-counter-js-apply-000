var katzDeliLine = [];
var inLine = [];
const takeANumber = (position, name) => {
  if (position >= 7) {
    return `Welcome, ${name}. You are number 6 in line.`
  } else {
    return `Welcome, ${name}. You are number ${position} in line.`
  }

}
takeANumber(5, 'Jamal');