
const submit = document.getElementById("submit");
const error = document.querySelector(".error");


submit.addEventListener("click", (e) => {

    const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    e.preventDefault();
    if (email.value === '') {

        error.innerHTML = 'Oops! Please add your email';

    } else if (!re.test(email.value)) {

        error.innerHTML = 'Oops! Please check your email';
    } else {
        error.innerHTML = '';
    }

})