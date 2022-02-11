const firebaseConfig = {
      apiKey: "AIzaSyC8V24bOLk6z5j_xmtFzJxiAkea80agrIY",
      authDomain: "kwitter-26e2d.firebaseapp.com",
      databaseURL: "https://kwitter-26e2d-default-rtdb.firebaseio.com",
      projectId: "kwitter-26e2d",
      storageBucket: "kwitter-26e2d.appspot.com",
      messagingSenderId: "419493941653",
      appId: "1:419493941653:web:c693bddcf6aa0aa0e9e69c"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    user_name = localStorage.getItem("user_name");

    room_name = localStorage.getItem("room_name");

    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose : "addding room name"
          });

          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html"
    }
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}