
var input = prompt("Compose your tweet:");
var input_len = input.length;
var tweet_maxLen = 140;
var left_len = tweet_maxLen - input_len;

alert("You have written " + input_len + " characters, you have " + left_len + " characters left.");


//You have written 182 characters, you have -42 characters left.