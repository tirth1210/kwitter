//YOUR FIREBASE  
const firebaseConfig = {
      apiKey: "AIzaSyCeRc0bGLr58prJ2MMwiE3bYTkWpFryRyw",
      authDomain: "kwitter-58366.firebaseapp.com",
      databaseURL: "https://kwitter-58366-default-rtdb.firebaseio.com",
      projectId: "kwitter-58366",
      storageBucket: "kwitter-58366.appspot.com",
      messagingSenderId: "220117950410",
      appId: "1:220117950410:web:5937b8b4eed4934c213933"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function send() 
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout() 
 {
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location = "index.html"
 }     
