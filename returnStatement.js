function getMilk(money){
    console.log("leaveHouse");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveUp");
    console.log("EnterShop");
    console.log("Buy " + calcBottles(money, 1.5) + " bottles of Milk");
    console.log("LeaveMilk");
    console.log("moveDownTwice");
    console.log("moveLeft");
    console.log("EnterHouse");
    return calcChange(money, 1.5);
    
}

function calcBottles(startingMoney, costPerBottle){
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle){
    return startingAmount % costPerBottle;
}

var money = prompt("How much money do you gave?");
console.log("Hello, master here is your " + getMilk(money) + " dollars of change");