//initialize firebase app
firebase.initializeApp({
    apiKey: "AIzaSyC4ZyyfBrERDk3tQuzoKEAKvi2tVidXQOM",
    authDomain: "ld-lookbook-775a3.firebaseapp.com",
    databaseURL: "https://ld-lookbook-775a3-default-rtdb.firebaseio.com",
    projectId: "ld-lookbook-775a3",
    storageBucket: "ld-lookbook-775a3.appspot.com",
    messagingSenderId: "937441169832",
    appId: "1:937441169832:web:c5f726bdf4c667adeccd9d",
    measurementId: "G-8HWC37EGYJ"
});

const database = firebase.firestore();

//2 args written to the email database
function writeToFirestore(email, username) {

    database.collection("emails").add({
        username: username,
        email: email

    }).then((docRef) => {

        console.log("unique id: ", docRef.id);

    }).catch((error) => {

        console.error(error);
    });
}

//takes the input values and validates before posting
function saveToFirestore() {

    var email = document.getElementById("email-input").value;
    var username = document.getElementById("username-input").value;

    if (ValidateEmail(email)) {

        writeToFirestore(email, username);
        $("#email-container").fadeOut(300);
        $("#wrapper").delay(200).fadeIn(300);
    
    } else {

        console.error("email fail");
        alert("Please enter valid email and username to continue");
    }

}

//validater
function ValidateEmail(mail) {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)){

        return (true);

    }else{

        return (false);
    }
}

//event listeners
var email_input = document.getElementById("email-input");

document.getElementById("email-confirm").onmousedown = function() {
    
    saveToFirestore();
}

email_input.onkeydown = function(event) {

    if (event.which === 13) {
        saveToFirestore();
    }
}
