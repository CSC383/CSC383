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

const btnLogout = document.getElementById('btnLogout');

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

    console.log(firebaseUser.email);

	} else {
		console.log('not logged in');
		btnLogout.classList.add('hide');
	}


});

//Loads all resources on page load
window.onload = allStatistics();
var resourceRef = firebase.database();

function updateStatistics(statisticID) {
	var id = statisticID;
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

function deleteResource(statisticID) {
	var id = statisticID;
	resourceRef.ref("data_dashboard").child(""+id+"").remove();

	allStatistics();
};

//Filters all resources
function allStatistics() {

	//Clears table of resources
	var tableRef = document.getElementById('table_body');
	while ( tableRef.rows.length > 0 )
	{
	 tableRef.deleteRow(0);
	}

	//Pull resources from Firebase database
	rootref.child("data_dashboard").on("child_added", function(snap) {

		//store data from firebase to be used in table
		var id = snap.key;
		var stringID = id.toString();
		var statValue = snap.val();

		//Creates table with resources pulled from firebase
		$("#table_body").append("<tr><td><input id='"+id+"Statistic' type='text' value=\""+stringID+"\" ></input></td><td><input id='"+id+"Value' type='text'  value=\""+statValue+"\" ></input></td><td><input type='submit' class='btn btn-success btn-send' value='Delete' onclick='deleteResource(\""+ stringID + "\")'></input></td><td><input type='submit' class='btn btn-success btn-send' value='Update' onclick='updateResource(\""+ stringID + "\")''></input></td></tr>"
		);
		});
});

};
