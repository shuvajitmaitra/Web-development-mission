// step 1 : Add click event handler in the submit button 
document.getElementById('btn-submit').addEventListener('click', function () {
    // step-2: Get email address from the input field
    // always remember for get text input field use .value
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // step-3 get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // Do not verify/Compare in this way it is risky
    // step-4: Compare email and password
    if (email == 'sontan@baap.com' && password == 'secrete') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Tui password vule gesos');
    }
})
