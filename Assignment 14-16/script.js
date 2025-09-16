// Q1
// let studentNames = [];

// Q2
// let studentNames = new Array();
 

// // Q3
// let stringsArray = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

// for (let i = 0; i < stringsArray.length; i++) {
//     document.write(stringsArray[i] + " , ");
// }


// Q4
// let numbersArray = [10, 20, 30, 40, 50];

// for (let i = 0; i < numbersArray.length; i++) {
//     document.write(numbersArray[i] + " , ");
// }


// Q5
// let booleanArray = [true, false, true, false, true];

// for (i = 0; i < booleanArray.length; i++) {
//     document.write(booleanArray[i] + " , ");
// }



// Q6
// let mixedArray = ["Ali", 25, true, 99.5, "Karachi"];

// for (let i = 0; i < mixedArray.length; i++) {
//     document.write(mixedArray[i] + " , ");
// }



// Q7
// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.write("<h2>Qualifications </h2>");
// for (let i = 0; i < qualifications.length; i++) {
//     document.write([i + 1] + ") " + qualifications[i] + "<br>");
// }


// Q8
// let studentNames = ["Michael", "John", "Tony"];

// let scores = [320, 230, 480];

// let totalMarks = 500;

// for (let i = 0; i < studentNames.length; i++) {
//     let percentage = (scores[i] / totalMarks) * 100;
//     document.write("score of " + studentNames[i] + " is " + scores[i] + "." + " Percentage: " + percentage + "%<br>");
// }

// Q10
// let studentScores = [320, 230, 480, 120];
// document.write("Scores of Students: " + studentScores + "<br>");
// studentScores.sort(function(a, b) {
//     return a - b; 
// });
// document.write("Ordered Scores of Students: " + studentScores);


// Q11
// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// let selectedCities = cities.slice(0, 3); 

// document.write("Cities List: <br>" + cities + "<br><br>");
// document.write("Selected Cities List: <br> " + selectedCities);


// Q12
// var arr = ["This ", " is ", " my ", " cat"];

// var string = arr.join("");

// document.write("Array: <br> " + arr + "<br><br>");
// document.write("String:<br> " + string);


// Q13
// let devices = ["keyboard", "mouse", "printer", "monitor"];

// document.write("Devices:<br>");
// document.write(devices.join(",") + "<br><br>");

// for (let i = 0; i < devices.length; i++) {
//     document.write("Out:<br>");
//     document.write(devices[i] + "<br>");
// }


// Q14
// let devices = ["keyboard", "mouse", "printer", "monitor"];

// document.write("Devices:<br>");
// document.write(devices.join(",") + "<br><br>");

// for (let i = devices.length - 1; i >= 0; i--) {
//     document.write("Out:<br>");
//     document.write(devices[i] + "<br>");
// }