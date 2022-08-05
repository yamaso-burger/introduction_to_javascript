
var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

console.log(guestList.length);
console.log(guestList[0]);
console.log(guestList.includes("Angela"));
var yourName = prompt("Could you tell me your name sir?");
if(guestList.includes(yourName)){
    alert("Welcome to the party sir.");
}else {
    alert("Sorry, maybe next time.")
}