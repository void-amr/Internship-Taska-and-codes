/**
 * @Author -> AryanRanjane(ranjanaryan14@gmail.com)
 * @Brief -> Demonstration of DOM by making a color_changing circle
 * @Date -> 21/6/24
 */

const MAIN = document.getElementById('main');
const BULB = document.getElementById('bulb');
var isTrue = false; 

BULB.addEventListener("click",function(){
        
    BULB.style.backgroundColor  = "white";
    MAIN.style.backgroundColor  ="black";
    if(isTrue) {
        change_Color(); 
    }
});

function change_Color() {
        
    BULB.addEventListener("click",()=>{
        BULB.style.backgroundColor  = "yellow";
        MAIN.style.backgroundColor  ="white";
    });
}