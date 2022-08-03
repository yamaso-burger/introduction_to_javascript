var fPerson = prompt("Tell the first person's name.");
var sPerson = prompt("Tell the second person's name.");

var loveScore = Math.random();
loveScore *= 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70){
    alert("Your love score is " + loveScore + "%, You love each other like Kanye loves Kanye");

}else if(loveScore >30 && loveScore <= 70) {
    alert("Your love Score is " + loveScore + "%.")
}else if (loveScore <= 30) {
    alert("Your love score is " + loveScore + "%" + " Your go together like oil and water.");
}

// alert("The love score between " + fPerson + " and " + sPerson + " is: " + loveScore + " %!!");

//generate random number