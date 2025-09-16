let word = prompt("Enter a Word");
let reverse;
let straight;
for(i=0; i < word.length; i++) {
    straight=word[i]
    for(j=word.length; j >=0; j--){
        reverse=word[j]
    }
}
if(straight == reverse) {
    document.write("<h2>The word is a palindrome</h2>");
} else {
    document.write("<h2>The word is not a palindrome</h2>");
}