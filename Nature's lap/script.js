
// Code for the user Login
document.getElementById('loginButton')?.addEventListener('click', () => {
    const email = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        alert("Login successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password.");
    }
});

// code for the user Sign-Up
document.getElementById('signupButton')?.addEventListener('click', () => {
    const email = document.getElementById('signup-username').value.trim();
    const password = document.getElementById('signup-password').value.trim();

    if (email && password) {
        // All the user data will be saved in local storage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const existingUser = users.find(user => user.email === email);

        if (existingUser) {
            alert("Email already registered. Please log in.");
            window.location.href = "index.html";
        } else {
            users.push({ email, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert("Sign-up successful! Please login.");
            window.location.href = "index.html";
        }
    } else {
        alert("Please fill in both fields.");
    }
});


// Code for the Forgot/Reset Password
document.getElementById('actionButton')?.addEventListener('click', () => {
    const email = document.getElementById('email').value.trim();
    const newPasswordSection = document.getElementById('new-password-section');
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (!email) {
        alert("Please enter your email.");
        return;
    }

    const userIndex = users.findIndex(u => u.email === email);

    if (userIndex === -1) {
        alert("Email not found.");
        return;
    }

    // This code will check if it's a password reset
    if (newPasswordSection.style.display === "none") {
        //  this will show a Prompt for password reset
        alert("Email found! Please enter a new password.");
        newPasswordSection.style.display = "block";
        document.getElementById('actionButton').innerText = "Reset Password";
    } else {
        // Code for reseting password
        const newPassword = document.getElementById('new-password').value.trim();

        if (!newPassword) {
            alert("Please enter a new password.");
            return;
        }

        users[userIndex].password = newPassword;
        localStorage.setItem('users', JSON.stringify(users));
        alert("Password reset successful! Please log in.");
        window.location.href = "index.html";
    }
});
