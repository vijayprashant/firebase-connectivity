// Import the functions you need from the Firebase Authentication SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6N4jTz0SnVU2gzZ8-pYuBUvQrMiwaCDY",
    authDomain: "login-77089.firebaseapp.com",
    projectId: "login-77089",
    storageBucket: "login-77089.appspot.com",
    messagingSenderId: "588447171592",
    appId: "1:588447171592:web:8b3b3bccfff0211be0bdbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize the authentication service

// Form submission event listener
document.getElementById('frmLogin').addEventListener('submit', async function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate email format
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address';
        return;
    } else {
        document.getElementById('emailError').innerText = '';
    }

    // Validate password
    if (password.length < 6) {
        document.getElementById('passwordError').innerText = 'Password must be at least 6 characters long';
        return;
    } else {
        document.getElementById('passwordError').innerText = '';
    }

    try {
        // Sign in with email and password
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // User signed in successfully
        const user = userCredential.user;
        alert('Login successful!');
        document.getElementById('frmLogin').reset(); // Clear input fields
    } catch (error) {
        console.error('Error signing in:', error.message);
        alert('Failed to sign in. Please check your email and password and try again.');
    }
});
