//login




//Get Elements
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');
const adminTools = document.getElementById('adminTools');
const adminMsg = document.getElementById('adminMsg');
const loginForm = document.getElementById('loginForm');
  var adminHeader = document.getElementById("admin");


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

const auth = firebase.auth();

//Add a realtime listener
auth.onAuthStateChanged(function(firebaseUser) {
	if(firebaseUser) {
		console.log(firebaseUser);
		btnLogout.classList.remove('hide');
    adminTools.classList.remove('hide');
    adminMsg.classList.add('hide');
    loginForm.classList.add('hide');

    console.log(firebaseUser.email);
    adminHeader.innerText = firebaseUser.email

	} else {
		console.log('not logged in');
		btnLogout.classList.add('hide');
    adminTools.classList.add('hide');
    adminMsg.classList.remove('hide');
    loginForm.classList.remove('hide');

    adminHeader.innerText = ""
	}


});
