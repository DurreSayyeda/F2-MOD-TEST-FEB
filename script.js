document.getElementById('email').addEventListener('input', function() {
    const email = this.value;
    let emailError = document.getElementById('emailError');
    if (email.length > 3 && email.includes('@') && email.includes('.')) {
        emailError.textContent = '';
    } else {
        emailError.textContent = 'Email must be more than 3 characters and contain "@" and "."';
    }
    checkFormValidity();
});

document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    let passwordError = document.getElementById('passwordError');
    if (password.length > 7) {
        passwordError.textContent = '';
    } else {
        passwordError.textContent = 'Password must be more than 8 characters';
    }
    checkFormValidity();
});

function checkFormValidity() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let successMessage = document.getElementById('successMessage');

    if (email.length > 3 && email.includes('@') && email.includes('.') && password.length > 7) {
        successMessage.textContent = 'All good to go!';
    } else {
        successMessage.textContent = '';
    }
}

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    if (confirm("Do you want to submit the form?")) {
        alert("Successful signup!");
    } else {
        window.location.reload(); // Reloads the current document
    }
});


