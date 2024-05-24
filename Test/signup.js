const axios = require('axios');

// Function to sign up a user
async function signup(username, email, password) {
  try {
    const response = await axios.post('http://localhost:2040/api/signup', {
      username: username,
      email: email,
      password: password
    });

    console.log('User registered successfully:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

// Example usage
const username = 'daveisgay';
const email = 'dave@example.com';
const password = 'ughhhh';

signup(username, email, password);
