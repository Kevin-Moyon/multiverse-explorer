/**
 * Authentication Logic
 * Handling the login form submission

 * User Identity: admin
    Security Key: 1234
 */

const loginForm = document.getElementById('login-form');

// Listen for the submit event
loginForm.addEventListener('submit', (event) => {
    // Prevent the page from refreshing
    event.preventDefault();

    // Get the values from the inputs
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation (You can set any rules here)
    if (username.length > 3 && password === '1234') {
        console.log('Access granted');
        
        // Save session state in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUser', username);

        // Redirect to the search page
        window.location.href = './pages/search.html';
    } else {
        alert('Invalid credentials. Hint: Password is 1234');
    }
});