document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Clear old errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';
    document.getElementById('successMessage').textContent = '';

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let isValid = true;

    // Name validation
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    }

    // Email validation using regex
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
        isValid = false;
    }

    // Message validation
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required.';
        isValid = false;
    }

    // Show success message if valid
    if (isValid) {
        document.getElementById('successMessage').textContent = 'Form submitted successfully!';
        document.getElementById('contactForm').reset();
    }
});
