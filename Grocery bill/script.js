let ricePrice = 250;  
let beansPrice = 300; 
let chickenPrice = 800;

alert("Welcome To Bin Hashim.!");

let riceKg = parseFloat(prompt("Rice is Rs " + ricePrice + " per kg.\nHow many kilograms of rice do you want?"));
let beansKg = parseFloat(prompt("Beans are Rs " + beansPrice + " per kg.\nHow many kilograms of beans do you want?"));
let chickenKg = parseFloat(prompt("Chicken is Rs " + chickenPrice + " per kg.\nHow many kilograms of chicken do you want?"));

let riceBill = riceKg * ricePrice;
let beansBill = beansKg * beansPrice;
let chickenBill = chickenKg * chickenPrice;

let totalBill = riceBill + beansBill + chickenBill;

document.write("<h3>Bill Details:</h3>");
document.write("-----------Bin Hashim------------" + "<br>");
document.write("Rice Quantity: " + riceKg + " kg x " + ricePrice + " = Rs " + riceBill + "<br>");
document.write("Beans Quantity: " + beansKg + " kg x " + beansPrice + " = Rs " + beansBill + "<br>");
document.write("Chicken quantity: " + chickenKg + " kg x " + chickenPrice + " = Rs " + chickenBill + "<br><br>");
document.write("<b>Total Bill = Rs " + totalBill + "</b>");


