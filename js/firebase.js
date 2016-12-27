


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

const auth = firebase.auth();


//Get Elements
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');
const acctPage = document.getElementById('myAccount');

//Add login event
btnLogin.addEventListener('click', e => {
	//get email and pass
	const email = txtEmail.value;
	const pass = txtPassword.value;

	//sign in
	const promise = auth.signInWithEmailAndPassword(email, pass);
	promise.catch(e => console.log(e.message));
});

//Add signup event
btnSignUp.addEventListener('click', e => {
	//get email and pass
	const email = txtEmail.value;
	const pass = txtPassword.value;

	//sign in
	const promise = auth.createUserWithEmailAndPassword(email, pass);
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
		acctPage.classList.remove('hide');
	} else {
		console.log('not logged in');
		btnLogout.classList.add('hide');
		acctPage.classList.add('hide');
	}
	
	
});