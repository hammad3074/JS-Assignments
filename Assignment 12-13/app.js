// Q:1
 let input = prompt("Enter a character:");

if (input.length !== 1) {
    console.log("Please enter only one character.");
} else {
    let char = input.char(0);

    if (char >= 48 && char <= 57) {
        console.log("The input is a number.");
    } else if (char >= 65 && char <= 90) {
        console.log("The input is an uppercase letter.");
    } else if (char >= 97 && char <= 122) {
        console.log("The input is a lowercase letter.");
    } else {
        console.log("The input is not a number or letter.");
    }
}


// Q:2
// let num1 = parseInt(prompt("Enter the first integer:"));
// let num2 = parseInt(prompt("Enter the second integer:"));

// if (isNaN(num1) || isNaN(num2)) {
//     console.log("Please enter valid integers.");
// } else if (num1 > num2) {
//     console.log(num1 + " is larger than " + num2);
// } else if (num2 > num1) {
//     console.log(num2 + " is larger than " + num1);
// } else {
//     console.log("Both numbers are equal.");
// }

// Q:3
// let number = parseFloat(prompt("Enter a number:"));

// if (isNaN(number)) {
//     console.log("Please enter a valid number.");
// } else if (number > 0) {
//     console.log("The number is positive.");
// } else if (number < 0) {
//     console.log("The number is negative.");
// } else {
//     console.log("The number is zero.");
// }


// Q:4

// function isVowel(char) {
//     if (char.length !== 1) {
//         return false; 
//         }    
//     let lowerChar = char.toLowerCase();
    
//     return ['a', 'e', 'i', 'o', 'u'].includes(lowerChar);
// }

// let input = prompt("Enter a single character:");
// console.log(isVowel(input));


// Q:5
// const correctPassword = "hammad123";

// let userPassword = prompt("Enter your password:");

// if (userPassword === null || userPassword === "") {
//     console.log("Please enter your password");
// } else if (userPassword === correctPassword) {
//     console.log("Correct! The password you entered matches the original password.");
// } else {
//     console.log("Incorrect password");
// }


// Q:6
// var greeting; 
// var hour = 13; 

// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// alert(greeting); 



// // Q:7
// window.onload = function () {
//   // Ask the user for time in 24-hour format
//   var time = prompt("Enter time in 24-hour:");

//   // Convert input to a number
//   time = parseInt(time);

//   var greeting;

//   // Check and display appropriate greeting
//   if (time >= 0 && time < 12) {
//     greeting = "Good Morning!";
//   } else if (time >= 12 && time < 17) {
//     greeting = "Good Afternoon!";
//   } else if (time >= 17 && time < 21) {
//     greeting = "Good Evening!";
//   } else if (time >= 21 && time <= 23) {
//     greeting = "Good Night!";
//   } else {
//     greeting = "Invalid time format!";
//   }

//   // Show result
//   alert(greeting);
//   document.write("<h2>" + greeting + "</h2>");
// };
