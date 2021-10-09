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

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room_name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name); window.location = "kwitter_page.html";
}

 function logout() 
 {
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location = "index.html"
 }     
