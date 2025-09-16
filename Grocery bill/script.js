// Prices per kg
let ricePrice = 250;    // per kg
let beansPrice = 300;   // per kg
let chickenPrice = 600; // per kg

// Total bill start
let totalBill = 0;1``1
let billDetails = "";

// 3 items ke liye loop
for (let i = 1; i <= 3; i++) {
    let choice = prompt(
        "Choose a product:\n" +
        "1 - Rice (Rs " + ricePrice + " per kg)\n" +
        "2 - Beans (Rs " + beansPrice + " per kg)\n" +
        "3 - Chicken (Rs " + chickenPrice + " per kg)"
    );

    if (choice === "1") {
        let riceKg = parseFloat(prompt("You selected Rice.\nPrice: Rs " + ricePrice + " per kg\nHow many kilograms do you want?"));
        let riceBill = riceKg * ricePrice;
        totalBill += riceBill;
        billDetails += "Rice: " + riceKg + " kg = Rs " + riceBill + "<br>";
    } 
    else if (choice === "2") {
        let beansKg = parseFloat(prompt("You selected Beans.\nPrice: Rs " + beansPrice + " per kg\nHow many kilograms do you want?"));
        let beansBill = beansKg * beansPrice;
        totalBill += beansBill;
        billDetails += "Beans: " + beansKg + " kg = Rs " + beansBill + "<br>";
    } 
    else if (choice === "3") {
        let chickenKg = parseFloat(prompt("You selected Chicken.\nPrice: Rs " + chickenPrice + " per kg\nHow many kilograms do you want?"));
        let chickenBill = chickenKg * chickenPrice;
        totalBill += chickenBill;
        billDetails += "Chicken: " + chickenKg + " kg = Rs " + chickenBill + "<br>";
    } 
    else {
        alert("Invalid choice! Please type 1, 2, or 3.");
        i--; // repeat this turn
    }
}

// Show final bill
document.write("<h3>Bill Details:</h3>");
document.write(billDetails);
document.write("<br><b>Total Bill = Rs " + totalBill + "</b>");
