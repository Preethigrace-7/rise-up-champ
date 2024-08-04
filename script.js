document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('newsletter-email').value;
    console.log('Subscribing to newsletter with email:', email);
    // Add your newsletter subscription logic here
});
