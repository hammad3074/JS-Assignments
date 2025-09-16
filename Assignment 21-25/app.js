// Q1
// var firstName = prompt("Enter First Name");
// var lastName = prompt("Enter Last Name");
// var fullName = firstName + " " + lastName;
// document.write("Welcome to our Website " + "<br>" + fullName)


// Q2
// var phone = prompt("Enter your favourite Phone Model");
// document.write("My favorite phone is: " + phone.slice() + "  <br>" );
// document.write(("Length of String: " + phone.length));


// Q3
// var find = prompt("Enter any letter");
// document.write("String: " + find.slice())
// var find1 = prompt("find the index of letter");
// document.write("<br>" + "Index of  " + find1 + ": " + find.indexOf(find1));


// Q4
// var find = prompt("Enter any letter");
// document.write("String: " + find.slice())
// var find1 = prompt("find the index of letter");
// document.write("<br>" + "Index of " + find1 + ": " + find.lastIndexOf(find1));

// Q5
// var find = prompt("Enter a Word");
// document.write("String: " + find.slice());
// var find1 = prompt("find the index of character");
// document.write("<br>" + "Character at index " + find1 + ": " + find.charAt(find1));


// Q6
// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// let fullName = firstName.concat(" ", lastName);
// document.write("Welcome to our Website ".concat(fullName));


// Q7
// let text = prompt("Enter city name");
// document.write("City: " + text.slice());
// let text2 = prompt("replacemet of name")
// document.write("<br>After replacement: " + text2.replace());

// document.write("<br>" + text2);

// Q8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(message + "<br><br>")
// message = message.replace(/and/g, "&");
// document.write(message);

// Q9
// var strInput = prompt("Enter a string:");
// document.write("Value: " + strInput + "<br>");
// document.write("Type: string <br><br>");

// var numInput = prompt("Enter a number:");
// document.write("Value: " + Number(numInput) + "<br>");
// document.write("Type: number <br>");



// Q10
// var input = prompt("Enter a word");
// document.write("Upper case: " + input.toUpperCase() + "<br>");



// Q11
var word = prompt("Enter a word: ");
document.write("Title case: " + word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());


// Q12
// var num = prompt("Enter a number (like 35.36):");
// var str = num.toString();
// var result = str.replace(".", "");
// document.write("Number: " + num + "<br>" + "Result: " + result);



// Q13
// var username = prompt("Enter your Username:");

// for (var i = 0; i < username.length; i++) {
//     var code = username.charCodeAt(i);
//     if (code === 33 || code === 44 || code === 46 || code === 64) {
//         username = prompt("Invalid username! Dobara valid username likho ([@ . , !] na ho):");
//         i = -1;
//     }
// }
// document.write("Valid Username: " + username);



// Q14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// alert("Welcome to our bakery")
// var userInput = prompt("What do you want to sir/madam? cake, apple pie, cookie, chips, patties").toLowerCase();
// var found = false;
// for (var i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === userInput) {
//         found = true;
//         break;
//     }
// }
// if (found) {
//     alert(userInput + " is available at index " + i + " in our bakery.");
// } else {
//     alert("We are sorry. " + userInput + " is not available in our bakery.");
// }



// Q15
// function validatePassword(password) {
//     if (password.length < 6) {
//         return "Password must be at least 6 characters long.";
//     }
//     if (!isNaN(password.charAt(0))) {
//         return "Password should not start with a number.";
//     }
//     let hasAlphabet = false;
//     let hasNumber = false;
//     for (let i = 0; i < password.length; i++) {
//         let charCode = password.charCodeAt(i);
//         if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//             hasAlphabet = true;
//         }
//         if (charCode >= 48 && charCode <= 57) {
//             hasNumber = true;
//         }
//     }
//     if (!hasAlphabet || !hasNumber) {
//         return "Password must contain both alphabets and numbers.";
//     }
//     return "Password is valid!";
// }
// let userPassword = prompt("Enter your password:");
// let result = validatePassword(userPassword);
// alert(result);


// Q16
// var university = "University of Karachi";
// document.write(university.split("").join("<br>"));



// Q17
// var lastchar = prompt("Enter a character:");
// document.write("User input: "+ lastchar + "<br>" + "Last character of input: " + lastchar.charAt(lastchar.length - 1));



// Q18
// var text = "The quick brown fox jumps over the lazy dog";
// var matches = text.match(/\bthe\b/gi);
// var count = matches ? matches.length : 0;
// document.write("Text: " + text + "<br>" + "There are " + count + " occurrences of word 'the'.");