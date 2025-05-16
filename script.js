
let username = document.querySelector('#name');
let email = document.querySelector('#email');
let password = document.querySelector('#password');



function isValidEmail(email) {
    return /^[a-zA-Z0-9._%+-]{3,20}@[a-zA-Z0-9.-]{3,15}\.[a-zA-Z]{2,5}$/.test(email);
}

function isValidPassword(password) {
    // console.log(password)
    if (typeof password !== "string") return false;
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!#%*?&]).{8,16}$/.test(password.trim());
}




function verifyData(username, email, password) {

    let count = 0

    if (/^[A-Za-z\s]{3,30}$/.test(username)) {
        count++
    } else {
        // console.error('invalid')
        document.querySelector('.err-name').innerText = "invalid name";
        setTimeout(() => {
            document.querySelector('.err-name').innerText = "";
        }, 2000)
    }


    if (isValidEmail(email)) {
        count++
    } else {
        // console.error('invalid email')
        document.querySelector('.err-email').innerText = "invalid email";
        setTimeout(() => {
            document.querySelector('.err-email').innerText = "";
        }, 2000)

    }

    if (isValidPassword(password)) {
        count++
    } else {
        // console.error('invalid password')
        document.querySelector('.err-password').innerText = "invalid password";
        setTimeout(() => {
            document.querySelector('.err-password').innerText = "";
        }, 2000)
    }

    if (count == 3) return true

}

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault()


    let ans = verifyData(username.value.trim(), email.value.trim(), password.value.trim())

    if (ans) {
        alert('form submitted')
        location.reload()
    }


})