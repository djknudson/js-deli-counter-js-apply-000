// 1. takeANumber

// declare take a number function accepting parameters for the current line and name to be added
var currentCustomer = 0;
var takeANumber = () => {
  // return welcome string
  var newNumber = currentCustomer;
  currentCustomer +=;
  var welcomeMessage = "Welcome. You are number ${newNumber} in line.";
  return welcomeMessage;
};

// 2. nowServing

// declare nowServing functions accepting one parameter for current line
var nowServing = currentLine => {
//return specified message if no one is in line
	if (currentLine.length === 0) {
		return "There is nobody waiting to be served!"
	} else {
// return current customer being served and remove name from front of line	
	var currentCustomer = currentLine.shift();
	// declare output message
	var currentlyServingMessage = `Currently serving ${currentCustomer}.`;
	return currentlyServingMessage;
		};
};

// 3. currentLine

// declare currentLine function accepting one parameter for current line
 var currentLine = line => {
// declare variable containing length of line
	var length = line.length
// declare variable for string output of current line
	var outputString = "The line is currently: ";
		
	if (length === 0) {
		return "The line is currently empty.";
	};
// iterate through current line and add each element and position to string of line
	for (var i = 0; i < length; i++) {
		var position = i + 1;
		outputString += `${position}. ${line[i]}`;
		if (i < length - 1) {
// add comma and space to the end of each element except last
			outputString += ", "
		};
	};
// return string of current line
	return outputString;
};