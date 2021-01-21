// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from 'firebase'
// Add the Firebase services that you want to use
import 'firebase/auth'
import 'firebase/firestore'
// TODO: Replace the following with your app’s Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBc5e-eYrDBS17dJvBENiOv9NnqR1KL2Ww',
    authDomain: 'macro-pulsar-302411.firebaseapp.com',
    projectId: 'macro-pulsar-302411',
    storageBucket: 'macro-pulsar-302411.appspot.com',
    messagingSenderId: '814677409545',
    appId: '1:814677409545:web:7c6d68415c6731c20c5dd8',
    measurementId: 'G-W6NHZ9CD7S',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export const google = new firebase.auth.GoogleAuthProvider()
export const facebook = new firebase.auth.FacebookAuthProvider()
export const auth = firebase.auth()
export default firebase
