/*
 * @Author -> AryanRanjane(ranjanearyan14@gmail.com)
 * @Brief -> demonstration of how let and var and const are different from each other
 * @Date -> 17/6/24
 */


/**
 *  Array are objects which can be passed to the variables 
 *  array let's us allocate memory in contiguous manner 
 *  that's what arrays are used for to allocate the memory for multiple  data
 *  of multiple types in a single object holding variable 
 *  
 *  VARIABLE_NAME = []-> subscript. 
 *  
 */ 


/**
 *  Finding length of array
 */

const arr = ["Aryan","Sara","Malhar",3,539.5353]; 
console.log(arr.length); 


/**
 *  Accessing and modifying the code
 */

console.log(arr[0]); 

arr[0] = "BmW";

console.log(arr[0]);

/**
 *	Array inside array is called as MultiDimensional array 
 *	ie VARIABLE_NAME = [some values, , ,[another array]]
 */

const WArr = ["Joker","Batman","IronMan",["Spiderman","Deadpool","Superman"]]; 

console.log(WArr[0][1]); 
console.log(WArr[1][0]); 
console.log(WArr[2][2]);

