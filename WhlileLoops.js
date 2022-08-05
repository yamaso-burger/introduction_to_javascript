var count = 99;

while(true){

    if(count > 1){
        console.log(count + " bottles of beer on the wall, " + count + " bottles of beer.");
    } else if (count === 1){
        console.log(count + " bottle of beer on the wall, " + count + " bottle of beer.")
    } else if (count === 0) {
        console.log("No more bottles of beer on the wall, no more bottles of beer.");
    }

    if(count > 0){
        count --;
    }

    if(count > 1){
        console.log("Take one down and pass it around, " + count + " bottles of beer on the wall.");
    }else if (count === 1){
        console.log("Take one down and pass it around, " + count + " bottle of beer on the wall.");
    }else if (count === 0){
        console.log("Go to the store and buy some more, 99 bottles on the wall.");
        break;
    }

}