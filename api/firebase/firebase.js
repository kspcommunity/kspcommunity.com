const admin = require('firebase-admin');
const firebaseConfig = require('./firebaseconfig.json');
const serviceAccount = require('./firebaseServiceAccount.json');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: firebaseConfig.databaseURL
});

module.exports = admin;