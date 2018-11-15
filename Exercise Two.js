var myPrompt = prompt("What is your age?");
console.log(myPrompt);

var ThisYear= new Date();
var currentYear = ThisYear.getFullYear();

var age = myPrompt
var BirthYear = currentYear-age
document.getElementById("output").innerHTML= "Therefore, your birth year is " + BirthYear