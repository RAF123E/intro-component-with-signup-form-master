let Fname = document.getElementById('fName');
let Lname = document.getElementById('lName');
let Email = document.getElementById('EmailAddr');
let Password = document.getElementById('passWord');
let submitBtn = document.getElementById('submitBtn');

let namePattern = /^[a-zA-Z]{3,}$/;
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

submitBtn.addEventListener('click', function () {

    validateInput(Fname, namePattern);
    validateInput(Lname, namePattern);
    validateInput(Email, emailPattern);
    validateInput(Password, /^.{6,}$/);

});

function validateInput(input, pattern) {
    let errorText = input.nextElementSibling.nextElementSibling;
    let errorIcon = input.nextElementSibling;

    if (!pattern.test(input.value)) {
        errorText.style.display = 'block';
        errorIcon.style.display = 'block';
        input.style.border = '2px solid hsl(0, 100%, 74%)';
    } else {
        errorText.style.display = 'none';
        errorIcon.style.display = 'none';
        input.style.border = '2px solid hsl(154, 59%, 51%)';
    }
}



