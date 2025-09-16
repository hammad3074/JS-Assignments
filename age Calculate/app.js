    var Bday = prompt("Enter your birth date:");
    var age = new Date(Bday);
    var result = age.getFullYear() - 2025;
    if(result < 0){
        result = result * -1;
    }
    document.write("<b><h2>Your age is: " + result);