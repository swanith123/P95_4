var firebaseConfig = {
    apiKey: "AIzaSyCsgh_1wbAWOr3maJM3yyMlyP7OIz7piOE",
    authDomain: "let-chat-web-app-66cf8.firebaseapp.com",
    projectId: "let-chat-web-app-66cf8",
    storageBucket: "let-chat-web-app-66cf8.appspot.com",
    messagingSenderId: "270549214391",
    appId: "1:270549214391:web:65930265c05dfedb545932",
    measurementId: "G-6B52B2SNLQ"
  };
  
  // Initialize Firebase
  var app = (firebaseConfig);
  username=localStorage.getItem("username");
  document.getElementById("username").innerHTML="Welcome " + username + "!";
  firebase.initializeApp(firebaseConfig);

function addRoom(){
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}  

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + room_name);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_name+"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
  }