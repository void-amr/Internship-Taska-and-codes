/*
 *  @Author -> AryanRanjane(ranjanearyan14@gmail.com)
 *  @Date -> 19/6/24 
 *  @Brief -> Logic for form validation of registration form 
 */

const NUMBER = document.getElementById('no').value; 
const BUTTON = document.getElementsByClassName('btn'); 


/**
 * Creating the BOM.location object
 * we can directly create it as well but for better understanding we are gonna 
 * try implementing it's methods and phases 
 */

/***
 * Navigating new page

 * Whenever a new value is assigned to the location object, 
 * a document will be loaded using the URL 
 * as if location.assign() had been called with the modified UR
 */

