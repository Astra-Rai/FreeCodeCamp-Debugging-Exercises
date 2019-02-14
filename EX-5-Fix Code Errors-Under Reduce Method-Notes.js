//Instructions


/*
Before

let myArray = [1, 2, 3;
let arraySum = myArray.reduce((previous, current =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
*/

//After
let myArray = [1, 2, 3];//added closing bracket 
//The reduce() method executes a reducer function (that you provide) on each member of the array resulting in a single output value.

let arraySum = myArray.reduce((previous, current) =>  previous + current);// move closing ) to coorect location
console.log(`Sum of array values is: ${arraySum}`);//remember use of string literals, $before {targeted variable inside curely braces}

/*Reduce Method Notes


The reduce() method reduces the array to a single value.


The reduce() method executes a provided function for each value of the array (from left-to-right).


The return value of the function is stored in an accumulator (result/total).


Note: reduce() does not execute the function for array elements without values.

*/