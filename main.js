
var city = prompt("Enter City Name: ");
if (city === "Karachi"){
    alert("Welcome to city of lights");
}

var gender = prompt("Enter Your Gender");
if (gender === "male"){
    alert("Good Morning Sir");
}
if (gender === "female"){
    alert("Good Morning Ma'am");
}

var color = prompt("Enter the color of traffic road signal: \n Red, Yellow or Green");
if (color === "Red"){
    alert("Must Stop");
} 
if (color === "Yellow"){
    alert("Ready to Move");
} 
if (color === "Green"){
    alert("Move Now");
} 

var fuel = +prompt("Enter your remaining fuel in car in litres: ");
if (fuel < 0.25){
    alert("Please refill your fuel in car");
}


var a = 4; 
if (++a === 5){ 
    alert("given condition for variable a is true");
    }

// Part B
var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
    }

// Part C
var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
    }

if (c === 13){ 
    alert("condition 2 is true"); 
    }

if (++c < 14){ 
    alert("condition 3 is true"); 
    } 

if(c === 14){ 
    alert("condition 4 is true"); 
    }

var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
    alert("The cost equals"); 
    }

if (true){ 
    alert("True"); 
    } 

if (false){ 
    alert("False"); 
    }

if("car" < "cat"){ 
    alert("car is smaller than cat"); 
    }

var obtainedMarks = +prompt("Enter Obtained Marks in three subjects: ");
var totalMarks = +prompt("Enter total Marks: ");
var percentage = (obtainedMarks / totalMarks) * 100;

document.write("<h3>" + "Mark Sheet" + "<h3>");
document.write("Total Marks: " + totalMarks + "</br>");
document.write("Marks Obtained: " + obtainedMarks + "</br>");
document.write("Percentage: " + percentage + "</br>");

if (percentage >= 80 && percentage < 100){
    document.write("Grade: A-one" + "<br>");
    document.write("Remarks: Excellent" + "<br>");
}

else if (percentage >= 70 && percentage < 80){
    document.write("Grade: A" + "<br>");
    document.write("Remarks: Good" + "<br>");
}

else if (percentage >= 60 && percentage < 70){
    document.write("Grade: B" + "<br>");
    document.write("Remarks: You need to improve" + "<br>");
}

else if (percentage < 60){
    document.write("Grade: Fail" + "<br>");
    document.write("Remarks: Sorry" + "<br>");
}

else{
    document.write("Invalid Input" + "<br>");
}


var secret = 7;
        var guess = +prompt("Guess the Number: \nBetween 1-10");

        if (secret === guess){
            alert("Bingo! Correct Answer: ");
        }

        else if (++secret === guess){
            alert("Close enough to the correct answer");
        }

        else{
            alert("Sorry Wrong Guess");
        }


var num = +prompt("Enter number to check number is divisible by 3 or not: ");
if (num % 3 === 0){
    alert(num + " is divisble by 3");
}
else{
    alert(num + " is not divisible by 3");
}

var num = +prompt("Enter number to check number is even or odd");
if (num % 2 === 0){
    alert(num + " is even number");
}
else{
    alert(num + " is odd number");
}


var temperature = +prompt("Enter your city temperature: ");
if (temperature > 40){
    alert("It is too hot outside");
}
else if (temperature > 30){
    alert("The weather today is Normal");
}
else if(temperature > 20){
    alert("Today's Weather is cool");
}
else{
    alert("OMG! Today's weather is so Cool");
}


var firstNumber = +prompt("Enter First Number: ");
var secondNumber = +prompt("Enter Second Number: ");
var operator = prompt("Choose your operator: \n( + , - , * , / , % )");
document.write("<h3>" + "Calculator" + "</h3>");
document.write("First Number: " + firstNumber + "</br>");
document.write("Second Number: " + secondNumber + "</br>");
if (operator === "+"){
    document.write("Result: " + firstNumber + " + " + secondNumber + " = " + (firstNumber + secondNumber));
}

else if (operator === "-"){
    document.write("Result: " + firstNumber + " - " + secondNumber + " = " + (firstNumber - secondNumber));
}

else if (operator === "*"){
    document.write("Result: " + firstNumber + " x " + secondNumber + " = " + (firstNumber * secondNumber));
}

else if (operator === "/"){
    document.write("Result: " + firstNumber + " / " + secondNumber + " = " + (firstNumber / secondNumber));
}

else if (operator === "%"){
    document.write("Result: " + firstNumber + " % " + secondNumber + " remainder is: " + (firstNumber % secondNumber));
}

else{
    document.write("Wrong Input");
}