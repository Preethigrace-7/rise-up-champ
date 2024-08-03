document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle sign up logic here
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log('Signing up with', email, password);
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle login logic here
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log('Logging in with', email, password);
});
