
const firebaseConfig = {
    apiKey: "AIzaSyCK3UtAz-B-rYsAJ78jyYZHWxWK9QfAnO0",
    authDomain: "practice-project-103e9.firebaseapp.com",
    projectId: "practice-project-103e9",
    storageBucket: "practice-project-103e9.appspot.com",
    messagingSenderId: "571977957666",
    appId: "1:571977957666:web:8e38b835f99419b5c1a57b",
    measurementId: "G-QGXBYPPGEY"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }