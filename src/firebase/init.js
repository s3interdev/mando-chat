import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
     apiKey: "AIzaSyAFIT-t-OlQ0Wq3mUXiU3L-w9AbgKgjRyM",
     authDomain: "s3-mando-chat.firebaseapp.com",
     databaseURL: "https://s3-mando-chat.firebaseio.com",
     projectId: "s3-mando-chat",
     storageBucket: "s3-mando-chat.appspot.com",
     messagingSenderId: "1047734376795",
     appId: "1:1047734376795:web:3785b457445e02cc2fa27e"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Export firestore database
export default firebaseApp.firestore();