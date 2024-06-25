/***
 * @Author -> AryanRanjane(ranjanearyan14@gmail.com)
 * @Date -> 24/6/24
 */


/** Transfering the DOM object to varibles */
// The variables are declared in global scope so can be accessed anywhere in this file. 

const BUY_BUTTON1 = document.getElementById('BUY-1');
const BUY_BUTTON2 = document.getElementById('BUY-2');
const CARD_2 = document.getElementsByClassName('card-row2');

/** 
 * Checking if the Html file is parsed before the js code 
 * as we have passed the parsing type as async the js code is parsed simultaneously with html file
 * but some times the js code is parsed and the html code is not parsed properly 
 * to make sure that all the DOMContentLoaded properly before manipulating the DOM object 
 * we perform the DOMContentLoading by checking if document.object is loaded or not 
 */

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready_callback);
} else {
    ready_callback();
}

function ready_callback() {
    BUY_BUTTON1.addEventListener("click", function (event) {
        locationLink();
        addItemsToCart();
    });
}

/** Utility - Function */

function addItemsToCart() {

    const myObject = {
        item1: document.getElementsByClassName('card-row1').innerHTML
    }
    /** Here 2params ->  setItem(key is used to retrieve the data, value is the value paired with key) */
    var localDataStored = localStorage.setItem('card_1', JSON.stringify(myObject));
    var retrievingData = localStorage.getItem(JSON.parse('card_1'));
}

function locationLink() {
    location.replace("http://127.0.0.1:5500/Amazon-clone/src/shopping_cart.html");
}