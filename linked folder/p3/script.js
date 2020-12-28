var subject1 = parseInt(prompt("Enter your 1st subject Numbers")) ;
var subject2 = parseInt(prompt("Enter your 2nd subject Numbers")) ;
var subject3 =parseInt(prompt("Enter your 3rd subject Numbers")) ;
var average =(subject1 + subject2 + subject3 ) / 3
console.log("Average" , average);
if (average > 80) {
    console.log(alert( "you are above standard, Admission Granted!"));   
} else {
   console.log(alert( average )); 
}