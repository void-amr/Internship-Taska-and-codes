/***
 * @Author -> AryanRanjane(ranjanearyan14@gmail.com)
 * @Brief -> Demonstration of using globaal object
 * @Date -> 20/6/24
 ***/

// Global Object
/**
 * To use global object create a object with the property you would like 
 * access it through that window object
 */

/**
 * It is said that use the global object least as posssible for error reasons src="./"
 */

window.CurretnUser = {
    name:"Aryan"
};

globalThis.alert(window.CurretnUser.name)