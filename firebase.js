import { initializeApp } from 'firebase/app';


// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC5A6R9os3hlB5WxOFg5jW4pHIwWpbcg6E",
    authDomain: "myapp-function.firebaseapp.com",
    databaseURL: "https://myapp-function.firebaseio.com",
    projectId: "myapp-function",
    storageBucket: "myapp-function.appspot.com",
    messagingSenderId: "185861590808",
    appId: "1:185861590808:web:31069421fa686c1c23d86d",
    measurementId: "G-T1GTP1LRYS"
  };
  
  
  let firebaseApp = initializeApp(firebaseConfig);
//   !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

  export default firebaseApp