//This page handles all resources page content

//jquery for phone fields
$(".required").keyup(function () {
    if (this.value.length == this.maxLength) {
      var $next = $(this).next('.required');
      if ($next.length)
          $(this).next('.required').focus();
      else
          $(this).blur();
    }
});

const auth = firebase.auth();
const btnLogout = document.getElementById('btnLogout');

//Add logout event
btnLogout.addEventListener('click', function(e) {
	auth.signOut();
  console.log(e.message);
});

//Add a realtime listener
auth.onAuthStateChanged(function(firebaseUser) {
	if(firebaseUser) {
		console.log(firebaseUser);
		btnLogout.classList.remove('hide');
    console.log(firebaseUser.email);
    closeModal();
	} else {
		console.log('not logged in');
    showModal();
		btnLogout.classList.add('hide');
	}
});

function closeModal() {
  $('#myModal').modal('close');
};

function showModal(){
  $('#myModal').modal('show');
};

//Loads all resources on page load
window.onload = allResources();
var resourceRef = firebase.database();

function updateResource(resourceID) {
	var id = resourceID;
	var service = id + "service";
	var phase = id + "phase";
	var county = id + "county";
	var name = id + "name";
	var address = id + "address";
	var phone = id + "phone";
	var lat = id + "lat";
	var lng = id + "lng";
	var contact = id + "contact";
	var restriction = id + "restriction";
	var notes = id + "notes";
	var url = id + "url";

	var serviceUpdate = document.getElementById(service);
	var phaseUpdate = document.getElementById(phase);
	var countyUpdate = document.getElementById(county);
	var nameUpdate = document.getElementById(name);
	var addressUpdate = document.getElementById(address);
	var phoneUpdate = document.getElementById(phone);
	var latUpdate = document.getElementById(lat);
	var lngUpdate = document.getElementById(lng);
	var contactUpdate = document.getElementById(contact);
	var restrictionUpdate = document.getElementById(restriction);
	var notesUpdate = document.getElementById(notes);
	var urlUpdate = document.getElementById(url);

	resourceRef.ref("Resources").child(id).update({
		service: ""+ serviceUpdate.value +"",
		phase: ""+ phaseUpdate.value +"",
		county: ""+ countyUpdate.value +"",
		name: ""+ nameUpdate.value +"",
		address: ""+ addressUpdate.value +"",
		phone: ""+ phoneUpdate.value +"",
		contact: ""+ contactUpdate.value + "",
		restriction: ""+ restrictionUpdate.value +"",
		notes: ""+ notesUpdate.value +"",
		url: ""+ urlUpdate.value +"",
		lat: ""+ latUpdate.value +"",
		lng: ""+ lngUpdate.value +""
	});
};

function deleteResource(resourceID) {
	var id = resourceID;
	resourceRef.ref("Resources").child(""+id+"").remove();

	allResources();
};

//clears filters for new input
function clearResources(){
	document.getElementById('myCounty').value="";
	document.getElementById('myPhase').value="";
	document.getElementById('myService').value="";
	allResources();
};
//Filters all resources
function allResources() {

	//Clears table of resources
	var tableRef = document.getElementById('table_body');
	while ( tableRef.rows.length > 0 )
	{
	 tableRef.deleteRow(0);
	}

	//Pull resources from Firebase database
	rootref.child("Resources").on("child_added", function(snap) {

		//store data from firebase to be used in table
		var id = snap.key;
		var stringID = id.toString();
		var county = snap.child("county").val();
		var address = snap.child("address").val();
		var name = snap.child("name").val();
		var phone = snap.child("phone").val();
		var contact = snap.child("contact").val();
		var restriction = snap.child("restriction").val();
		var notes = snap.child("notes").val();
		var url = snap.child("url").val();
		var service = snap.child("service").val();
	  var phase = snap.child("phase").val();
		var lat	= snap.child("lat").val();
		var lng = snap.child("lng").val();

		makeTable(id, county, phase, service, name, address, phone, contact, restriction, url, notes, lat, lng, stringID);
		});
};
function makeTable(id, county, phase, service, name, address, phone, contact, restriction, url, notes, lat, lng, stringID){
  //Creates table with resources pulled from firebase
  $("#table_body").append("<tr><td><input id='"+id+"county' type='text' value=\""+county+"\" ></input></td><td><input id='"+id+"phase' type='text'  value=\""+phase+"\" ></input></td><td><input id='"+id+"service' type='text' value=\""+service+"\" ></input></td><td><input id='"+id+"name' type='text'  value=\""+name+"\" ></input></td><td><input id='"+id+"address' type='text'  value=\""+address+"\" ></input></td><td><input id='"+id+"phone' type='text'  value=\""+phone+"\" ></input></td><td><input id='"+id+"contact' type='text'  value=\""+contact+"\" ></input></td><td><input id='"+id+"restriction' type='text'  value=\""+restriction+"\" ></input></td><td><input id='"+id+"url' type='text'  value=\""+url+"\" ></input></td><td><input id='"+id+"notes' type='text'  value=\""+notes+"\" ></input></td><td><input id='"+id+"lat' type='text'  value=\""+lat+"\" ></input></td><td><input id='"+id+"lng' type='text'  value=\""+lng+"\" ></input></td><td><input type='submit' class='btn btn-success btn-send' value='Delete' onclick='deleteResource(\""+ stringID + "\")'></input></td><td><input type='submit' class='btn btn-success btn-send' value='Update' onclick='updateResource(\""+ stringID + "\")''></input></td></tr>"
  );
}
//Filters resources based on user input
function filterResources() {
		//Clears table of resources
		var tableRef = document.getElementById('table_body');
		while ( tableRef.rows.length > 0 )
		{
		 tableRef.deleteRow(0);
		}

//Grabs user input for filters
var serviceVal = document.getElementById("myService").value;
var phaseVal = document .getElementById("myPhase").value;
var countyVal = document.getElementById("myCounty").value;

//Pull resources from Firebase database
rootref.child("Resources").on("child_added", function(snap) {

  //store data from firebase to be used in table
  var id = snap.key;
  var stringID = id.toString();
  var county = snap.child("county").val();
  var address = snap.child("address").val();
  var name = snap.child("name").val();
  var phone = snap.child("phone").val();
  var contact = snap.child("contact").val();
  var restriction = snap.child("restriction").val();
  var notes = snap.child("notes").val();
  var url = snap.child("url").val();
  var service = snap.child("service").val();
  var phase = snap.child("phase").val();
  var lat	= snap.child("lat").val();
  var lng = snap.child("lng").val();

//creates table based on user inputs
if(countyVal == county && phaseVal == phase && serviceVal == service) {
  makeTable(id, county, phase, service, name, address, phone, contact, restriction, url, notes, lat, lng, stringID);
}
else if (countyVal == county && phaseVal == false && serviceVal == false){
  makeTable(id, county, phase, service, name, address, phone, contact, restriction, url, notes, lat, lng, stringID);
}
else if (countyVal == county && phaseVal == phase && serviceVal == false){
	makeTable(id, county, phase, service, name, address, phone, contact, restriction, url, notes, lat, lng, stringID);
}
else if (countyVal == county && phaseVal == false && serviceVal == service){
	makeTable(id, county, phase, service, name, address, phone, contact, restriction, url, notes, lat, lng, stringID);
}
else if (countyVal == false && phaseVal == phase && serviceVal == false){
	makeTable(id, county, phase, service, name, address, phone, contact, restriction, url, notes, lat, lng, stringID);
}
else if (countyVal == false && phaseVal == phase && serviceVal == service){
	makeTable(id, county, phase, service, name, address, phone, contact, restriction, url, notes, lat, lng, stringID);
}

else if (countyVal == false && phaseVal == false && serviceVal == service){
	makeTable(id, county, phase, service, name, address, phone, contact, restriction, url, notes, lat, lng, stringID);
}

});


};
