import firebase from 'firebase/app'
import 'firebase/auth'

/*const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGIN_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
})*/

const app = firebase.initializeApp({
    apiKey: "AIzaSyD9W-4Mj9SfpwdQcMb8YlAgEpoKd4Sha0A",
    authDomain: "auth-development-7f817.firebaseapp.com",
    projectId: "auth-development-7f817",
    storageBucket: "auth-development-7f817.appspot.com",
    messagingSenderId: "383378948436",
    appId: "1:383378948436:web:5d3c5e8fff52df3bacc8c1"
  });

export const auth = app.auth()
export default app