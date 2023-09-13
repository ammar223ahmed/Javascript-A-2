// Chapter no 9,11 USER INPUT & CONDITIONAL STATEMENT
    // Q1
    const cityName = prompt("Enter your city name:");


if (cityName && cityName.toLowerCase() === "karachi") {
  alert("Welcome to the city of lights");
} else {
  alert("Welcome to " + cityName); 
}

// Q2
var gender = prompt("Enter your gender (male or female):");

var genderLowerCase = gender.toLowerCase();

if (genderLowerCase === "male") {
  alert("Good Morning Sir.");
} else if (genderLowerCase === "female") {
  alert("Good Morning Ma'am.");
} else {
  alert("Good Morning!"); 
}
// Q3
var signalColor = prompt("Enter the color of the traffic signal (red, yellow, or green):");

var colorLowerCase = signalColor.toLowerCase();

switch (colorLowerCase) {
  case "red":
    alert("Stop! The traffic signal is red.");
    break;
  case "yellow":
    alert("Prepare to stop. The traffic signal is yellow.");
    break;
  case "green":
    alert("Go ahead. The traffic signal is green.");
    break;
  default:
    alert("Invalid input. Please enter red, yellow, or green.");
}

// Q4
var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in liters):"));

if (remainingFuel < 0.25) {
  alert("Please refill the fuel in your car.");
} else {
  alert("You have sufficient fuel in your car. Drive safely!");
}

// Q5
// A...
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}

// B...
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}


// C...
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
  }
  if (++c < 14) {
    alert("condition 3 is true");
  }
  if (c === 14) {
    alert("condition 4 is true");
  }
// D...
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
  alert("The cost equals");
}
// E...
if (true) {
    alert("True");
  }
  if (false) {
    alert("False");
  }
//   F...
if("car" < "cat"){
    alert("car is smaller than cat");
  }

//   Q6 

  var firstSubject = +prompt("Enter first Subject marks");
 var SecondSubject = +prompt("Enter Second Subject marks");
 var ThirdSubject = +prompt("Enter third Subject marks");
 var totalMarks = +prompt("Enter total subject marks");
 var obtMarks = firstSubject + SecondSubject + ThirdSubject;
 var percentage = (obtMarks / totalMarks) * 100;

//  var percentage = +prompt("Enter your percentage");

 if (percentage >= 80 && percentage <= 100) {
   document.write("Percentage:" + percentage + "<br>" + "Grade: " + "A+");}
   else if (percentage >= 70 && percentage <= 80) {
   document.write("Percentage:" + percentage + "<br>" + "Grade: " + "A");}
    else if (percentage >= 60 && percentage <= 70) {
   document.write("Percentage:" + percentage + "<br>" + "Grade: " + "B");}
 else if (percentage >= 0 && percentage <= 60) {
   document.write("Percentage:" + percentage + "<br>" + "Grade: " + "F");
 } else {
   console.log("Please enter correct percentage...");
 }

//  Q7

var secretNumber = Math.floor(Math.random() * 10) + 1;


var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));


if (userGuess === secretNumber) {
  alert("Bingo! Correct answer");
} else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
  alert("Close enough to the correct answer");
} else {
  alert(`Sorry, the secret number was ${secretNumber}. Try again!`);
}
// Q8...
var number = parseInt(prompt("Enter a number:"));

if (number % 3 === 0) {
  alert(`${number} is divisible by 3.`);
} else {
  alert(`${number} is not divisible by 3.`);
}

// Q9...
var number = parseInt(prompt("Enter a number:"));
if (number % 2 === 0) {
  alert(`${number} is an even number.`);
} else {
  alert(`${number} is an odd number.`);
}

// Q10...
var temperature = parseFloat(prompt("Enter the temperature in Celsius:"));
if (temperature > 40) {
  alert("It is too hot outside.");
} else if (temperature > 30) {
  alert("The Weather today is Normal.");
} else if (temperature > 20) {
  alert("Today’s Weather is cool.");
} else if (temperature > 10) {
  alert("OMG! Today’s weather is so Cool.");
} else {
  alert("It is very cold outside.");
}

// Q11...
var firstNumber = parseFloat(prompt("Enter the first number:"));
var secondNumber = parseFloat(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");
let result;
if (operation === "+") {
  result = firstNumber + secondNumber;
} else if (operation === "-") {
  result = firstNumber - secondNumber;
} else if (operation === "*") {
  result = firstNumber * secondNumber;
} else if (operation === "/") {
  if (secondNumber !== 0) {
    result = firstNumber / secondNumber;
  } else {
    result = "Division by zero is not allowed.";
  }
} else if (operation === "%") {
  
  if (secondNumber !== 0) {
    result = firstNumber % secondNumber;
  } else {
    result = "Modulo by zero is not allowed.";
  }
} else {
  result = "Invalid operation. Please use +, -, *, /, or %.";
}
alert(`Result: ${result}`);

//   Chapter no 9,11 end 


// Chapter no 12,13  "IF...ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS" 
// Q1

const userInput = prompt("Enter a character (number or letter):");
const charCode = userInput.charCodeAt(0);
if (charCode >= 48 && charCode <= 57) {
  alert("The input is a number.");
} else if (charCode >= 65 && charCode <= 90) {
  alert("The input is an uppercase letter.");
} else if (charCode >= 97 && charCode <= 122) {
  alert("The input is a lowercase letter.");
} else {
  alert("The input is not a number or a letter.");
}


// Q2

var firstInteger = parseInt(prompt("Enter the first integer:"));


var secondInteger = parseInt(prompt("Enter the second integer:"));
if (firstInteger > secondInteger) {
  alert(`The larger integer is: ${firstInteger}`);
} else if (firstInteger < secondInteger) {
  alert(`The larger integer is: ${secondInteger}`);
} else {
  alert("Both integers are equal.");
}


// Q3

const character = prompt("Enter a character (string of length 1):");


function isVowel(char) {
  const lowerChar = char.toLowerCase();
  return 'aeiou'.indexOf(lowerChar) !== -1;
}
var first = isVowel(character);

if (first) {
  alert(`'${character}' is a vowel.`);
} else {
  alert(`'${character}' is not a vowel.`);
}


// Q4

var first = prompt("Enter a character (string of length 1):");
function isVowel(char) {
  const lowercaseChar = char.toLowerCase(); 
  return 'aeiou'.includes(lowercaseChar); 
}


var first = isVowel(character);

if (first) {
  alert(`'${character}' is a vowel.`);
} else {
  alert(`'${character}' is not a vowel.`);
}


// Q5
var correctPassword = "yourSecretPassword"; 


var userPassword = prompt("Enter your password:");


if (userPassword === null || userPassword === "") {
  alert("Please enter your password.");
} else {
  if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password.");
  } else {
    alert("Incorrect password.");
  }
}


// Q6
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// Q7

const inputTime = parseInt(prompt("Enter time in 24-hour clock format (e.g., 1900):"));

let timePeriod;
if (inputTime >= 0 && inputTime < 1200) {
  timePeriod = "Good morning";
} else if (inputTime >= 1200 && inputTime < 1700) {
  timePeriod = "Good afternoon";
} else if (inputTime >= 1700 && inputTime < 2100) {
  timePeriod = "Good evening";
} else if (inputTime >= 2100 && inputTime <= 2359) {
  timePeriod = "Good night";
} else {
  timePeriod = "Invalid time format";
}
alert(timePeriod);

