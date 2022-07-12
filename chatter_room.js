
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
      apiKey: "AIzaSyCym85Kix8lnaEWaMgRMJk-cce1oCdnkTE",
      authDomain: "kwitter-cefeb.firebaseapp.com",
      projectId: "kwitter-cefeb",
      storageBucket: "kwitter-cefeb.appspot.com",
      messagingSenderId: "727745480248",
      appId: "1:727745480248:web:d81daac112f182865cc8cd",
      measurementId: "G-CVM8VHMN0Z"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!" ; 

    function addRoom()
    {
      room_name = document.getElementById("room_name") ;
      firebase.database ().ref("/").child (room_name).update ({
      purpose: "adding room_name"
      });

      localStorage.setItem("room_name" , room_name);
      window.location = "kwitter_page.html";
    }


    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
         
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id ="+Room_names+" onclick = 'redirecttoRoomName(this.id)'> # "+Room_name+"</div> <hr>";

      //End code
      });});}
getData();



function divelem()
{
    windows.alert("You have joined this class . Now you could chat with members of it");
}
