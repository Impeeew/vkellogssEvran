function validateForm() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const fname = document.getElementById('inputfirsname').value;
        const uname = document.getElementById('inputusername').value;
        const email = document.getElementById('inputemail').value;
        const phone = document.getElementById('inputtelpon').value;
        const message = document.getElementById('message').value;

        let validationPassed = true;

        if (!fname || fname.length < 2) {
            alert('First name must be filled and at least 2 characters long.');
            validationPassed = false;
        }

        if (!uname || uname.length < 2) {
            alert('Last name must be filled and at least 2 characters long.');
            validationPassed = false;
        }

        if (!email || !email.includes('@')) {
            alert('Email must valid.');
            validationPassed = false;
        }

        if (!phone || phone.length < 10 || isNaN(phone)) {
            alert('Telephon number must validt.');
            validationPassed = false;
        }

        if (!message || message.length < 10) {
            alert('The message must be more than 5 sentences long');
            validationPassed = false;
        }

        if (validationPassed) {
            alert('Succesful')
            window.location.href = './HomePage.html'
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    validateForm();
});


function move() {
    window.location.href = "./ProductPage.html";
}

