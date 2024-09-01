document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear any existing errors
    clearErrors();

    // Validate the form fields
    let isValid = true;

    // Validate Firstname
    const firstname = document.getElementById('firstname').value.trim();
    if (firstname.length < 2) {
        showError('firstnameError', 'Firstname must be at least 2 characters long');
        isValid = false;
    }

    // Validate Middlename (optional)
    const middlename = document.getElementById('middlename').value.trim();
    // Optional field, no validation needed

    // Validate Lastname
    const lastname = document.getElementById('lastname').value.trim();
    if (lastname.length < 2) {
        showError('lastnameError', 'Lastname must be at least 2 characters long');
        isValid = false;
    }

    // Validate Course
    const course = document.getElementById('course').value;
    if (course === '' || course === 'Course') { // Assuming 'Course' is the placeholder value
        showError('courseError', 'Please select a course');
        isValid = false;
    }

    // Validate Gender
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        showError('genderError', 'Please select a gender');
        isValid = false;
    }

    // Validate Phone
    const phone = document.getElementById('phone').value.trim();
    const phonePattern = /^\+?\d{10,15}$/; // Adjust this pattern as needed
    if (!phonePattern.test(phone)) {
        showError('phoneError', 'Please enter a valid phone number');
        isValid = false;
    }

    // Validate Address
    const address = document.getElementById('address').value.trim();
    if (address.length < 5) {
        showError('addressError', 'Address must be at least 5 characters long');
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; // Improved pattern for email
    if (!emailPattern.test(email)) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
    }

    // Validate Password
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters long');
        isValid = false;
    }

    // Validate Re-type Password
    const retypePassword = document.getElementById('retypePassword').value;
    if (password !== retypePassword) {
        showError('retypePasswordError', 'Passwords do not match');
        isValid = false;
    }

    // If all fields are valid, redirect to the thank you page
    if (isValid) {
        window.location.href = 'html/thankyou.html'; // Correct path to thankyou.html
    }
});

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => {
        element.textContent = '';
    });
}
