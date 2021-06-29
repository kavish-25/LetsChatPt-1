
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyCpO3d_57HSNJLsiUWZC4nL-F31rrx1YBQ",
      authDomain: "letschatapp-d4b6c.firebaseapp.com",
      projectId: "letschatapp-d4b6c",
      storageBucket: "letschatapp-d4b6c.appspot.com",
      messagingSenderId: "943770983047",
      appId: "1:943770983047:web:c26f933d5b6c4e99d4f622"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
