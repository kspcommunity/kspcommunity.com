const express = require('express');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const admin = require('firebase-admin');
const firebase = require("firebase");

firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
});

// Initialize Firebase Admin SDK with service account credentials
const serviceAccount = require('../firebase/firebaseServiceAccount.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const router = express.Router();
const db = admin.firestore();
const auth = admin.auth();

// Signup route
router.post(
  '/',
  // Validation middleware
  [
    body('username').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
  ],
  async (req, res) => {
    // Handle validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
      firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
        userCredential.user.sendEmailVerification().then(() => {
          return res.status(201).json({ message: 'User registered successfully', user: { username, email } });
        }).catch((error) => {
          console.error('Error sending email verification:', error);
          return res.status(500).json({ message: 'Internal server error' });
        });
        userCredential.user.updateProfile({ displayName: username }).then(() => {
          console.log('User profile updated successfully');
        }).catch((error) => {
          console.error('Error updating user profile:', error);
        });
      })
    } catch {
      return res.status(500).json({ message: 'Internal server error' });
    }

//    try {
//      // Check if user already exists
//      const userRef = db.collection('users').doc(email);
//      const doc = await userRef.get();
//      if (doc.exists) {
//        return res.status(400).json({ message: 'Email is already registered' });
//      }
//
//      // Hash the password
//      const hashedPassword = await bcrypt.hash(password, 10);
//
//      // Create the new user
//      await userRef.set({ username, email, password: hashedPassword });
//
//      res.status(201).json({ message: 'User registered successfully', user: { username, email } });
//    } catch (error) {
//      console.error('Error creating user:', error);
//      res.status(500).json({ message: 'Internal server error' });
//    }
  }
);

module.exports = router;
