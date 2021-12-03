/* 
Complete the solution so that it reverses all of the words within the string passed in.

Example:

"The greatest victory is that which requires no battle" 
--> "battle no requires which that is victory greatest The"
*/

/* Step 1: split the words first so we can access each word; reversedSentence = str.split(" "); If we console log this we get ['The', 'greatest', 'victory', 'is', 'that', 'which', 'requires', 'no', 'battle']
  Step 2: We reverse the order str.split(" ").reverse(); If we console.log we get ['battle', 'no', 'requires', 'which', 'that', 'is', 'victory', 'greatest', 'The']
  Step 3: We join the words and put a space in between the join brackets  str.split(" ").reverse().join(" "); If we console.log we get "battle no requires which that is victory greatest The"; If we didn't put a space in between the join bracket we would've got "battlenorequireswhichthatisvictorygreatestThe" 
*/

function reverseWords(str){
  reversedSentence = str.split(" ").reverse().join(" ")
  return reversedSentence; // reverse those words
}

console.log(reverseWords("The greatest victory is that which requires no battle"))