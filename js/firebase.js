


(function() {

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCFb9UeRylH8Wqj6CBcQq_yt39WIjrWQM8",
    authDomain: "csc383-4ef7b.firebaseapp.com",
    databaseURL: "https://csc383-4ef7b.firebaseio.com",
    storageBucket: "csc383-4ef7b.appspot.com",
    messagingSenderId: "159052970618"
  };
  firebase.initializeApp(config);

}());


var rootref = firebase.database().ref();
firebase.auth().onAuthStateChanged((user) => {
  var adminHeader = document.getElementById("admin");
  if (user) {
    console.log(user.email);

    adminHeader.innerText = user.email
  }
  else {
    adminHeader.innerText = ""
  }
});

//Add resources to database
	var county = document.getElementById("county");
	var nam = document.getElementById("name");
	var contact = document.getElementById("contact");
	var restriction = document.getElementById("restriction");
	var notes = document.getElementById("notes");
	var url = document.getElementById("url");
	var service = document.getElementById("service");
	var phase = document.getElementById("phase");
	var addBtn = document.getElementById("addBtn");



function addResource () {

		rootref.child("Resources").push().set({
      county: ""+ county.value +"",
      name: ""+ nam.value +"",
      contact: ""+ contact.value + "",
      restriction: ""+ restriction.value +"",
      notes: ""+ notes.value +"",
      url: ""+ url.value +"",
      service: ""+ service.value +"",
      phase: ""+ phase.value +""

    });
	}

  const auth = firebase.auth();


//Get Elements
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');
const adminTools = document.getElementById('adminTools');
const adminMsg = document.getElementById('adminMsg');


//Add login event
btnLogin.addEventListener('click', e => {
	//get email and pass
	const email = txtEmail.value;
	const pass = txtPassword.value;

	//sign in
	const promise = auth.signInWithEmailAndPassword(email, pass);
	promise.catch(e => console.log(e.message));
});


//Add logout event
btnLogout.addEventListener('click', e => {
	auth.signOut();


});

//Add a realtime listener
auth.onAuthStateChanged(firebaseUser => {
	if(firebaseUser) {
		console.log(firebaseUser);
		btnLogout.classList.remove('hide');
    adminTools.classList.remove('hide');
    adminMsg.classList.add('hide');
	} else {
		console.log('not logged in');
		btnLogout.classList.add('hide');
    adminTools.classList.add('hide');
    adminMsg.classList.remove('hide');
	}


});




//Add resources from database to tables
