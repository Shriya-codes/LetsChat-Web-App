var firebaseConfig = {
      apiKey: "AIzaSyDLLU32DjvLnE6UMODFftd0brRUhTQtzIM",
      authDomain: "kwitter-app-20a78.firebaseapp.com",
      databaseURL: "https://kwitter-app-20a78-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-20a78",
      storageBucket: "kwitter-app-20a78.appspot.com",
      messagingSenderId: "862645301246",
      appId: "1:862645301246:web:2f681ae0a68ff5143a9aaf",
      measurementId: "G-01LLMYQ8B3"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
