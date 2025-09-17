function searchRollNumber(rollNumbers, searchValue) {
    let found = false;

    for (let i = 0; i < rollNumbers.length; i++) {
        if (rollNumbers[i] === searchValue) {
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

let rollNumbers = [101, 102, 103, 104, 105];
let searchValue = parseInt(prompt("Enter roll number to search:"));
searchRollNumber(rollNumbers, searchValue);
