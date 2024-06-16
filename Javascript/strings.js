/* 
  @Author -> AryanRanjane(ranjanearyan14@gmail.com)
  @Brief -> Nature of string and its methods,etc
  @Date -> 16/6/24
 */

/* 
 *	Strings --> collection of charachters
 *
 *	Strings --> can be  manipulated 
 *			Strings can be reversed
 *			substringed
 *			etc 
 *
 */

a = "Malhar";
b = "Aryan";

console.log(b + "king");

console.log(a + "Cheap");

/* 
 *	String nature and working
 *
 *	Strings --> Heap <== Objects == Strings 
 *
 *	So basically strings are objects which are stored in the heap memory 
 *		strings in js mutable which means we can modify them anytime 
 
		Objects == instance 

		String creates a  memory instance in the memory 
			String's data is available
*/

/* 
 *	Substring  
 *
 */
//  P  U  N  E 
//  0  1  2  3  index

c="Pune"

console.log(c.substring(1,3)); // startindex,endindex-1; 

console.log(c.length);

/*
  String interpolation
  
      adding the place holder to the string 
      ie considering that we have a string and we want to print some value of variable 
      into our string in c we have something as format specifier 
      but in js we have interpolation

      ie` Value" ${var}` 
*/


str ="KO"
n =2;

console.log(`value of ${str} is ${n}`);