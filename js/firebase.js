


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



//Add resources from database to tables



rootref.child("Resources").on("child_added", snap => {

	var county = snap.child("county").val();
	var name = snap.child("name").val();
	var contact = snap.child("contact").val();
	var restriction = snap.child("restriction").val();
	var notes = snap.child("notes").val();
	var url = snap.child("url").val();
	var service = snap.child("service").val();


	if(service == "office space"){
	$("#table_body").append("<tr><td>" + county + "</td><td>" + name + "</td><td>" + contact +
						  "</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
						  "</a></td><td>" + notes + "</td></tr>");
	}
	else if(service == "maker space"){
	$("#table_body2").append("<tr><td>" + county + "</td><td>" + name + "</td><td>" + contact +
						  "</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
						  "</a></td><td>" + notes + "</td></tr>");
	}

	else if(service == "kitchen/market"){
	$("#table_body3").append("<tr><td>" + county + "</td><td>" + name + "</td><td>" + contact +
						  "</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
						  "</a></td><td>" + notes + "</td></tr>");
	}

	else if(service == "workshop/competitions"){
	$("#table_body4").append("<tr><td>" + county + "</td><td>" + name + "</td><td>" + contact +
						  "</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
						  "</a></td><td>" + notes + "</td></tr>");
	}

	else if(service == "counseling"){
	$("#table_body5").append("<tr><td>" + county + "</td><td>" + name + "</td><td>" + contact +
						  "</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
						  "</a></td><td>" + notes + "</td></tr>");
	}

	else if(service == "funding"){
	$("#table_body6").append("<tr><td>" + county + "</td><td>" + name + "</td><td>" + contact +
						  "</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
						  "</a></td><td>" + notes + "</td></tr>");
	}

	else if(service == "professional services"){
	$("#table_body7").append("<tr><td>" + county + "</td><td>" + name + "</td><td>" + contact +
						  "</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
						  "</a></td><td>" + notes + "</td></tr>");
	}

	else if(service == "real estate assistance"){
	$("#table_body8").append("<tr><td>" + county + "</td><td>" + name + "</td><td>" + contact +
						  "</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
						  "</a></td><td>" + notes + "</td></tr>");
	}





});
