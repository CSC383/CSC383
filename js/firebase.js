


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

//reference to firebase database
var rootref = firebase.database().ref();


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

	var address = document.getElementById("address");
	var phone = document.getElementById("phone");



function addResource () {

		rootref.child("Resources").push().set({
      county: ""+ county.value +"",
      name: ""+ nam.value +"",
      contact: ""+ contact.value + "",
      restriction: ""+ restriction.value +"",
      notes: ""+ notes.value +"",
      url: ""+ url.value +"",
      service: ""+ service.value +"",
      phase: ""+ phase.value +"",
      address: ""+ address.value +"",
      phone: ""+ phone.value +""
    });
	}

  const auth = firebase.auth();




//Add a realtime listener
auth.onAuthStateChanged(firebaseUser => {
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




//Add resources from database to tables
