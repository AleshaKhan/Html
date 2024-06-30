document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (email && message) {
        alert('Form submitted successfully!');
    } else {
        alert('Please fill out all fields.');
    }
});
