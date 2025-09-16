//Q 1
// let arr = [
//     [],[]
// ];


//Q 2
// let arr = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]
// console.log(arr);


//Q 3
// for(i=1; i<=10; i++)
// console.log(i);


//Q 4
// let num = prompt("Enter a Number")
// let ending = prompt("Enter a Number where you want to end the table")
// for(i=1; i<=ending; i++)
// console.log(num+" x "+ i+" = "+num*i);


//Q 5
// let fruits = ["apple","banana","mango","orange","stawberry"];
// for(i=0; i<fruits.length; i++){
//     console.log(fruits[i])
//     console.log("Element at index "+i+" is "+fruits[i]);
// }


//Q 6
// document.write("<b>Counting:</b> ");
// for (let i = 1; i <= 15; i++) {
//     document.write(i);
//     if (i < 15) document.write(", ");
// }
// document.write("<br>");

// document.write("<b>Reverse Counting:</b> ");
// for (let j = 10; j >= 1; j--) {
//     document.write(j);
//     if (j > 1) document.write(", ");
// }
// document.write("<br>");

// document.write("<b>Even:</b> ");
// for (let k = 0; k <= 20; k += 2) {
//     document.write(k);
//     if (k < 20) document.write(", ");
// }
// document.write("<br>");

// document.write("<b>Odd:</b> ");
// for (let l = 1; l < 20; l += 2) {
//     document.write(l);
//     if (l < 19) document.write(", ");
// }
// document.write("<br>");

// document.write("<b>Series:</b> ");
// for (let m = 2; m <= 20; m += 2) {
//     document.write(m + "k");
//     if (m < 20) document.write(", ");
// }


//Q 7
// let a = ["cake", "apple pie", "cookie", "chips", "patties"];
// let find = prompt("Welcome to Kababjees Bakery. What do you want to order sir/ma'am?");
// let lowfind = find.toLowerCase();
// let upfind = find.toUpperCase();

// let found = false;

// for (let i = 0; i < a.length; i++) {
//     if (lowfind == a[i]) {
//         document.write(upfind + " is available at index " + i + "<br>");
//         found = true;
//         break;
//     }
// }

// if (!found) {
//     document.write("We are sorry. " + upfind + " is not available in our bakery");
// }



///Q 8
// let a = [10,20,30,40,50,100];
// var biggest=a[0];
// for(i=0;i<a.length;i++){
//     if(a[i]>biggest){
//          biggest = a[i];
//     }
// }
// document.write("Array items: " + a + "<br>");
// document.write("The largest number is: " + biggest + "<br>");

//Q 9
// let a = [10,20,30,40,50];
// var smallest=a[0];
// for(i=1;i<a.length;i++){
//     if(a[i]<smallest){
//          smallest=a[i];
//     }
// }
// document.write("Array items: " + a + "<br>");
// document.write("The smallest number is: " + smallest + "<br>");

//Q 10
// for (i = 5; i <= 100; i++) {
//     if (i % 5 == 0)
//         document.write(i + " ,");
//     else
//         continue
// }