function getMilk(money){
    var bottles = money / 1.5;
    bottles = Math.floor(bottles);
    console.log("leaveHouse");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveUp");
    console.log("EnterShop");
    console.log("Buy " + bottles + " bottles of Milk");
    console.log("LeaveMilk");
    console.log("moveDownTwice");
    console.log("moveLeft");
    console.log("EnterHouse");
}

var money = prompt("How much money do you gave?");
getMilk(money);