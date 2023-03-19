// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDcF3cd87D4Mw1aXFYku-eMgjipQyV_fEg",
  authDomain: "monday-c9ac8.firebaseapp.com",
  projectId: "monday-c9ac8",
  storageBucket: "monday-c9ac8.appspot.com",
  messagingSenderId: "995312252239",
  appId: "1:995312252239:web:e89fa6badcf472f39a013a"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
   
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            alert("signed up successfully");
                        window.location.assign("signIn.html");
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email,password)
        .then((result) => {
            // Signed in 
            alert("logged in successfully")
            window.location.assign("dashboard.html")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}
const Logout = () => {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        alert("logged out successfully")
        window.location.assign("index.html")
      })
      .catch((error) => {
        // An error happened.
      });   
    }







