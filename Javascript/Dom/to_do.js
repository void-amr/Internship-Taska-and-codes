/***
 * @Author -> AryanRanjane(ranjanaryan14@gmail.com)
 * @Brief -> Demonstration of dom by making to-do app
 * @Date -> 20/6/24 
 */

/** Storing the document objects inside the variables */
const INPUT = document.getElementById('input');
const BUTTON = document.getElementById('add');
const LISTS = document.getElementById('ordered_list');


BUTTON.addEventListener('click', function(){
    const TEXT = INPUT.value;

    if(TEXT !== "") {
        const LIST_ITEM = document.createElement('li');
        LIST_ITEM.style.textAlign="center";
        LIST_ITEM.textContent = TEXT;
        LIST_ITEM.style.listStyle="none";
        LIST_ITEM.style.backgroundColor="green"

        LIST_ITEM.style.marginTop="2em";

        /***
         * Adding the element
         */

        LISTS.append(LIST_ITEM);
        INPUT.value="";
        
        LIST_ITEM.addEventListener('click',()=>{
            /**Removing the element */
            LIST_ITEM.style.textDecoration = 'line-through';
            LIST_ITEM.style.backgroundColor ="red"
        });
    }
});

