function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        
        var fibonacciSequence = [];
        
        for(var i = 0; i < n; i ++) {
            if(i === 0) {
                fibonacciSequence.push(0);
            } else if (i === 1) {
                fibonacciSequence.push(1);
            } else {
                fibonacciSequence.push(fibonacciSequence[i-1] + fibonacciSequence[i-2]);
            }
        }
        
        return fibonacciSequence;
        
        
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    
    