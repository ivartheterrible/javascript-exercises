const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1- num2;
};

const sum = function(args) {
  let initialValue = 0;
  let sumValue = args.reduce((accumlator, currentValue) => accumlator + currentValue, initialValue,)
  return sumValue;
};

const multiply = function(args) {
  let result = args.reduce((accumlator, num) => {return accumlator * num})
  return result;
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
