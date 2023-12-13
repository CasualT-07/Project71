import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBDhg_zB40mfKrHQNXMQgYQYDIcFkECRkA",
    authDomain: "project-71-4f76c.firebaseapp.com",
    projectId: "project-71-4f76c",
    storageBucket: "project-71-4f76c.appspot.com",
    messagingSenderId: "177441167209",
    appId: "1:177441167209:web:23f973820c3d232bf90ff8"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
