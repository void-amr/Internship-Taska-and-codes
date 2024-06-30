/***
 * @Author -> AryanRanjane(ranjanearyan14@gmail.com)
 * @Date -> 24/6/24
 */

/** Transfering the DOM object to varibles */
// The variables are declared in global scope so can be accessed anywhere in this file. 

document.addEventListener("DOMContentLoaded", function(){
    const nameInput = document.getElementById('Name');
    const gmailInput = document.getElementById('Gmail');
    const passwordInput = document.getElementById('Pass');
    const submitButton = document.getElementById('btn');
    const expectedUserName = "Aryan";
    const expectedUserGmail = "arx14@gmail.com";
    const expectedUserPass = "asx98"; // Should be hashed and stored securely

    submitButton.addEventListener('click', function (e) {
        e.preventDefault();
        const enteredUserName = nameInput.value;
        const enteredUserGmail = gmailInput.value;
        const enteredUserPass = passwordInput.value;

        if (enteredUserName === expectedUserName && enteredUserGmail === expectedUserGmail && enteredUserPass === expectedUserPass) {
            alert("Login Successful");
            location.href = "http://127.0.0.1:5500/Amazon-clone/src/redirecting.html"
        } else {
            alert("Invalid credentials");
        }
    });
});