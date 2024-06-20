/***
 * @Author -> AryanRanjane(ranjanaryan14@gmail.com)
 * @Brief -> Demonstration of dom by making to-do app
 * @Date -> 20/6/24 
 */



const HEADER = document.getElementById('header-1');
const INPUT = document.getElementById('input-id');
const BUTTON = document.getElementById('addbtn');
const LIST_ITEMS = document.getElementById('un-list');

document.addEventListener("DOMContentLoaded",function(){
    BUTTON.addEventListener("click",function(){

        const IP = LIST_ITEMS.value;
        if(IP !== "") {
            const LIST = document.createElement("li");
            LIST.textContent = IP;
            LIST_ITEMS.appendChild(LIST);
            INPUT.value = "";
            }

    })
});



