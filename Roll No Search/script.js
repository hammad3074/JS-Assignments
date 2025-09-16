// // Function to search roll number
// function searchRollNumber(rollNumbers, searchValue) {
//     let found = false;

//     for (let i = 0; i < rollNumbers.length; i++) {
//         if (rollNumbers[i] === searchValue) {   // if statement
//             found = true;
//             break;
//         }
//     }

//     if (found) {
//         document.write("✅ Roll number " + searchValue + " is found in the list.");
//     } else {
//         document.write("❌ Roll number " + searchValue + " is NOT found in the list.");
//     }
// }

// // Roll numbers list
// let rollNumbers = [101, 102, 103, 104, 105];

// // User input
// let searchValue = parseInt(prompt("Enter roll number to search:"));

// // Call function
// searchRollNumber(rollNumbers, searchValue);


// Function to search roll number
function searchRollNumber(rollNumbers, searchValue) {
    let found = false;

    for (let i = 0; i < rollNumbers.length; i++) {
        if (rollNumbers[i] === searchValue) {   // if statement
            found = true;
            break;
        }
    }

    if (found) {
        document.write("✅ Roll number " + searchValue + " is <b>Present</b>.");
    } else {
        document.write("❌ Roll number " + searchValue + " is <b>Absent</b>.");
    }
}

// Roll numbers list
let rollNumbers = [101, 102, 103, 104, 105];

// User input
let searchValue = parseInt(prompt("Enter roll number to search:"));

// Call function
searchRollNumber(rollNumbers, searchValue);
