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
var geocode;

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
  var latitude = document.getElementById("latitude");
  var longitude = document.getElementById("longitude");

function codeAddress(){
 -	
 -	geocoder.geocode({address:address.value}, function geocodeResult(results, status) {
 -         if (status == google.maps.GeocoderStatus.OK)
 -    {
 -        var latlng = results[0].geometry.location;
 -		
 -    } else if (status == google.maps.GeocoderStatus.ZERO_RESULTS) {
 -        alert("Bad destination address.");
 -    } else {
 -        alert("Error calling Google Geocode API.");
 -    }
 -	
 -       
 -          });
 -	
 -		
 -	}
 -	
 -   }

function addResource () {

  var prim1 = document.getElementById("prim1");
  var prim2 = document.getElementById("prim2");
  var prim3 = document.getElementById("prim3");

  var phone = prim1.value + prim2.value + prim3.value

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
      phone: ""+ phone +"",
      lat: ""+ latitude.value +"",
      lng: ""+ longitude.value +"",
      reviews: {
	         initialReview: {
			          rating: 0,
			          user: "blank",
			          text: "blank"
		 		}
      	       }
    });
	}











//Add resources from database to tables
