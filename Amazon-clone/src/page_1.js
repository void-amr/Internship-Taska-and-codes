/***
 * @Author -> AryanRanjane(ranjanearyan14@gmail.com)
 * @Date -> 24/6/24
 */

/**
* Implementing the logic for shopping cart as the user hits buy 
* the element goes to new document ie shopping cart
* Concepts needed for this are 
* Local storage storage, dom 
*/

/**Loadint the BUY id element into the BUY_BTN variable */
const BUY_BTN = document.getElementById('BUY-1');
const CARD_1 = document.getElementsByClassName('card-1');

BUY_BTN.addEventListener("click",function(){
    
    document.write(CARD_1.value);
});