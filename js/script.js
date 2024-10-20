// script.js

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Message sent!'); // Simple alert for demonstration
    this.reset(); // Reset the form
});
