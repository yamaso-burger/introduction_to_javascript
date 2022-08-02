//1 Create a var that stores the name that user enters via prompt.

var name = prompt("What is your name?");

//2 Capitalise the first letter of their name.

//a isolate the first char
var firstChar = name.slice(0,1);

//b Turn the first char to upper Capitalise
var upperCaseFirstChar = firstChar.toUpperCase();

//c Isolate the rest of the name
var restOfName = name.slice(1, name.length);

//d Turn the rest of name to lowercases
var lowerCaseRestOfName = restOfName.toLowerCase();

//e concatnate the first char with the rest of the char
var capitalisedName = upperCaseFirstChar + lowerCaseRestOfName;


//3 We use the capitalised version of their name to greet them using an alert.
alert("Hello, " + capitalisedName);

// Hello, Angela