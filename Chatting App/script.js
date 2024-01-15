const firebaseConfig = {
    apiKey: "AIzaSyCKhBxHzbxTKNA5WEbkspf4D--RSNABopQ",
    authDomain: "chat-app-ae993.firebaseapp.com",
    databaseURL: "https://chat-app-ae993-default-rtdb.firebaseio.com",
    projectId: "chat-app-ae993",
    storageBucket: "chat-app-ae993.appspot.com",
    messagingSenderId: "495595114011",
    appId: "1:495595114011:web:cafc8480e88978049a32be",
    measurementId: "G-0E4Y0HSKRW"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const databaseRoom = firebase.database();


function createAccount(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var btn = document.getElementById("btn");
    btn.innerHTML = `<i class="fa-solid fa-spinner"></i> <br> <small>Please Wait....</small>`
    var username = document.getElementById('username').value;
    
    auth.createUserWithEmailAndPassword(email, password)

    .then(function(userCredentials){
        const userFolder = databaseRoom.ref()
        var userDetails = {
            username:username,
            email:email,
            create:Date().now(),
            status:"online"
        }
        const user = auth.currentUser
        userFolder.child('users/' + user.uid).set(userDetails)
        alert("Account has been created👍");
        btn.innerHTML = "Account created"
    })
    .catch(function(error){
        alert("Something went wrong please try again later...!☹️");
        btn.innerHTML = "error"
    })

}
