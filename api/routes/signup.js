const express = require('express');
const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword, sendEmailVerification } = require('firebase/auth');
const firebaseConfig = require('../firebaseconfig.json');

const router = express.Router();

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Create the user
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        try {
            // Send verification email
            await sendEmailVerification(userCredential.user);

            // Send response back
            res.status(200).send({ authenticated: true, email: true, credentials: userCredential.user });
        } catch (emailError) {
            // If sending email fails, still respond with user created status
            res.status(200).send({ authenticated: true, email: false, credentials: userCredential.user, error: emailError.message });
        }
    } catch (error) {
        // Send error response
        res.status(500).send({ authenticated: false, email: false, error: error.message });
        console.error(error);
    }
});

module.exports = router;
