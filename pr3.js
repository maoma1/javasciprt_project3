/*write a JavaScript function that accepts two arguments, a string and a letter 
and the function will count the number of occurrences of the specified letter within the string.*/


function countLetter(str, letr){
      let total = 0;
 for(let index=0; index<str.length; index++){
     if (str.charAt(index)===letr){
         
        total++     
    }
    }
    
    return total;
}
console.log(countLetter("rhapsody of realities",'a'));