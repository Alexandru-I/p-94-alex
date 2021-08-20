var firebaseConfig = {
    apiKey: "AIzaSyBI5N1RTRJkuU2YhK0YfA3F8do5AqA7vIE",
    authDomain: "p-93-qwitter.firebaseapp.com",
    databaseURL: "https://p-93-qwitter-default-rtdb.firebaseio.com",
    projectId: "p-93-qwitter",
    storageBucket: "p-93-qwitter.appspot.com",
    messagingSenderId: "726719756329",
    appId: "1:726719756329:web:26382ea571e7098ed3c438",
    measurementId: "G-72QPMW4L51"

  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function Adduser()
{
  var username = document.getElementById("un").value;
  firebase.database().ref("/").child("White hat JR").update({
    "teachers/Ritika/student1/name":"Alex",
    "teachers/Ritika/student2/name":"kid2",",
  });
}
  