/**
 * @Author -> AryanRanjane(ranjanearyan14@gmail.com)
 * @Brief -> Demonstraion of counter using dom 
 * @Date -> 20/6/24 
 */

/**
 * Selcting the button id btn
 */

const BUTTON = document.getElementById('btn');
const LIKECOUNTER = document.getElementById('likecount');
let COUNT = 0;

BUTTON.style.marginTop="19em"
BUTTON.style.height="150px"
BUTTON.style.width="150px"



BUTTON.addEventListener('click',function() {
    COUNT++;
    LIKECOUNTER.textContent = COUNT;
});