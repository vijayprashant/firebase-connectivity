// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js';

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
const auth = getAuth(); // Initialize the authentication service

// Function to create user with email and password
async function createUserWithEmailAndPasswordFunc(email, password) {
    try {
        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('User created successfully:', user);
        return user;
    } catch (error) {
        console.error('Error creating user:', error.message);
        throw error;
    }
}

// Add event listener to the submit button
const submit = document.getElementById('submit');
submit.addEventListener("click", async function (event) {
    event.preventDefault();
    
    // Get user input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Call the function to create user with email and password
        const user = await createUserWithEmailAndPasswordFunc(email, password);
        console.log('User created:', user);
        alert("User created successfully!");
        // Handle success, such as redirecting to a new page or displaying a success message
    } catch (error) {
        console.error('Error creating user:', error.message);
        // Handle error, such as displaying an error message to the user
    }
});
