// Q1
// let num = +prompt("Enter a positive integer:");

// if (num > 0) {
//   document.write("Number: " + num + "<br>");
//   document.write("Round off value: " + Math.round(num) + "<br>");
//   document.write("Floor value: " + Math.floor(num) + "<br>");
//   document.write("Ceil value: " + Math.ceil(num) + "<br>");
// } else {
//   document.write("Please enter a positive integer!");
// }   

// Q2
// let num = +prompt("Enter a negative number: ");
// if (num < 0) {
//   document.write("Number: " + num + "<br>");
//   document.write("Round off value: " + Math.round(num) + "<br>");
//   document.write("Floor value: " + Math.floor(num) + "<br>");
//   document.write("Ceil value: " + Math.ceil(num) + "<br>");
// } else {
//   document.write("Please enter a negative number!");
// }


// Q3
// let num = parseInt(prompt("Enter a absolute value: "));
// if (num < 0) {
//     absolute = -num;
// }
// else {
//     absolute = num;
// }
// document.write("The absolute value of " + num + " is " + absolute);

// Q4
// var dice = Math.random() * 6;
// document.write("random dice value: " + Math.ceil(dice));

// Q5
// let toss = Math.ceil(Math.random() * 2);

// let coin;
// if (toss >= 2) {
//     coin = "Heads";
// } else {
//     coin = "Tails";
// }
// document.write(toss + "<br>" + "Random coin value: " + coin)


// Q6
// var num = Math.ceil(Math.random() * 100);
// document.write("random number between 1 and 100: " + num);


// Q7
// var name = prompt("Enter your name: ");
// var weight = parseFloat(prompt("Enter your weight in kilograms: "));
// document.write("Your weight of "  + name + " is: "  + weight + " kilograms ");

// Q8
// var number = parseInt(prompt("Enter a number between 1 and 10: "));

// var secretNumber = 9;
// if (number === secretNumber) {
//     alert("Congratulations! You guessed the secret number " + secretNumber);
// } else {
//     alert("Sorry, Try again!");
// }