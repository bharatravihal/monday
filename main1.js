const firebaseConfig = {
  apiKey: "AIzaSyDcF3cd87D4Mw1aXFYku-eMgjipQyV_fEg",
  authDomain: "monday-c9ac8.firebaseapp.com",
  databaseURL: "https://monday-c9ac8-default-rtdb.firebaseio.com",
  projectId: "monday-c9ac8",
  storageBucket: "monday-c9ac8.appspot.com",
  messagingSenderId: "995312252239",
  appId: "1:995312252239:web:e89fa6badcf472f39a013a"
};
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');


  // Save message
  saveMessage(name, email, phone);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
   
    email:email,
    phone:phone,
    
  });
}
var database = firebase.database();
