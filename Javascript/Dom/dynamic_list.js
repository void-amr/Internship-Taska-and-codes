/**
 * @Author -> AryanRanjane(ranjanaryan14@gmail.com)
 * @Brief -> Demonstration of dom
 * @Date -> 20/6/24
 */


const INPUT = document.getElementById('inp');
const LIST = document.getElementById('il');
const BUTTON = document.getElementById('addItem');

document.addEventListener("DOMContentLoaded",function(){

    BUTTON.addEventListener("click",function(){
        const IP = INPUT.value;
        if(IP !== "") {
            const LI = document.createElement("li");
            LI.textContent = IP;
            LIST.appendChild(LI);
            INPUT.value = "";
        }
    })
})
