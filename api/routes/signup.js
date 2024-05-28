const express = require('express');
const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword, sendEmailVerification } = require('firebase/auth');
const firebaseConfig = require('../firebaseconfig.json');

const router = express.Router();

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

router.post('/', (req, res) => {
    const { email, password } = req.body;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        res.status(200).send({ authenticated: true, credentials: userCredential.user });

        sendEmailVerification(auth.currentUser)
        .then(() => {
            res.status(200).send({ email: true });
        })
        .catch((error) => {
            res.status(500).send({ email: false, error: error.message });
            console.error(error);
        });
    })
    .catch((error) => {
        res.status(500).send({ authenticated: false, error: error.message });
        console.error(error);
    });
});

module.exports = router;
