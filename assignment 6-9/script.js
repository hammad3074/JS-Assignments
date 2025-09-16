// assignment 6-9 
// task 1


// let a = 10;
// document.write("Result:<br>");
// document.write("The Value of a is "+a);
// document.write("<br>------------------------------------");
// ++a;
// document.write("<br>The value of ++a is "+a+"<br>");
// document.write("Now the value of a is "+a+"<br>");
// document.write("<br>The value of a++ is "+a+"<br>");
// a++;
// document.write("<br>Now the value of a is "+a+"<br>");
// --a;
// document.write("<br>The value of --a is "+a+"<br>");
// document.write("<br>Now the value of a is "+a+"<br>");
// document.write("<br>The value of a-- is "+a+"<br>");
// a--;
// document.write("<br>Now the value of a is "+a+"<br>");


// task 2


// var a=2,b=1;
// --a;
// document.write("<br>--a = "+a+"<br>");
// --b;
// document.write("<br>--b = "+b+"<br>");
// ++b;
// document.write("<br>++b = "+b+"<br>");
// b--;
// document.write("<br>b-- = "+b+"<br>");
// var result = --a - --b + ++b + b--;
// document.write("<br>Result of --a - --b + ++b + b-- = "+result+"<br>");


//task 3

// var username = prompt("Enter Your Name");
// document.write("Welcome to my Website, "+username);

// task 4

// var table = prompt("Enter a Number for Table");

// if(table==null || table.trim()===""){
//     for(var i = 1 ; i<=10 ; i++){
//         document.write("5 x "+i+" = "+ 5*i+"<br>");
//     }
// }
// else{
//     table=parseInt(table);
//     for(var i = 1 ; i<=10 ; i++){
//         document.write(table+" x "+i+" = "+ table*i+"<br>");
//     }
// }

//task 5

// var sub1=prompt("Enter First Subject Name");
// var sub2=prompt("Enter Second Subject Name");
// var sub3=prompt("Enter Third Subject Name");
// var total = 100;
// var osub1 = +prompt("Enter Obtained Marks for Subject 1");
// var osub2 = +prompt("Enter Obtained Marks for Subject 2");
// var osub3 = +prompt("Enter Obtained Marks for Subject 3");
// var per1,per2,per3;
// per1=(osub1/total)*100;
// per2=(osub2/total)*100;
// per3=(osub3/total)*100;
// var totalmarks, totalobtainedmarks, totalper;
// totalmarks=total+total+total;
// totalobtainedmarks=osub1+osub2+osub3;
// totalper=(per1+per2+per3)/3;
// document.write("<table><tr><td><h3>Subject</h3></td><td><h3>Total Marks</h3></td><td><h3>Obtained Marks</h3></td><td><h3>Percentage</h3></td></tr><tr><td> "+ sub1 +" </td><td> "+ total +" </td><td> "+ osub1 +" </td><td> "+ per1 +" </td></tr> <tr><td> "+ sub2 +" </td><td> "+ total +" </td><td> "+ osub2 +" </td><td> "+ per2 +" </td></tr> <tr><td> "+ sub3 +" </td><td> "+ total +" </td><td> "+ osub3 +" </td><td> "+ per3 +" </td></tr> <tr><td></td><td> "+ totalmarks +" </td><td> "+ totalobtainedmarks +" </td><td> "+ totalper +" </td></tr></table>");