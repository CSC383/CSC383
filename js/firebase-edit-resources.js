//This page handles all resources page content




//Loads all resources on page load
window.onload = allResources();
var resourceRef = firebase.database();

function updateResource(resourceID) {
	var id = resourceID;
	var county = id + "county";
	var name = id + "name";
	var contact = id + "contact";
	var restriction = id + "restriction";
	var notes = id + "notes";
	var url = id + "url";

	var countyUpdate = document.getElementById(county);
	var nameUpdate = document.getElementById(name);
	var contactUpdate = document.getElementById(contact);
	var restrictionUpdate = document.getElementById(restriction);
	var notesUpdate = document.getElementById(notes);
	var urlUpdate = document.getElementById(url);

	resourceRef.ref("Resources").child(id).update({
		county: ""+ countyUpdate.value +"",
		name: ""+ nameUpdate.value +"",
		contact: ""+ contactUpdate.value + "",
		restriction: ""+ restrictionUpdate.value +"",
		notes: ""+ notesUpdate.value +"",
		url: ""+ urlUpdate.value +""
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
		var name = snap.child("name").val();
		var contact = snap.child("contact").val();
		var restriction = snap.child("restriction").val();
		var notes = snap.child("notes").val();
		var url = snap.child("url").val();
		var service = snap.child("service").val();
	  var phase = snap.child("phase").val();

		//Creates table with resources pulled from firebase
		$("#table_body").append("<tr><td><input id='"+id+"county' type='text' class='form-control' value=\""+county+"\" ></input></td><td><input id='"+id+"name' type='text'  value=\""+name+"\" ></input></td><td><input id='"+id+"contact' type='text'  value=\""+contact+"\" ></input></td><td><input id='"+id+"restriction' type='text'  value=\""+restriction+"\" ></input></td><td><input id='"+id+"url' type='text'  value=\""+url+"\" ></input></td><td><input id='"+id+"notes' type='text'  value=\""+notes+"\" ></input></td><td><input type='submit' class='btn btn-success btn-send' value='Delete' onclick='deleteResource(\""+ stringID + "\")'></input></td><td><input type='submit' class='btn btn-success btn-send' value='Update' onclick='updateResource(\""+ stringID + "\")''></input></td></tr>"
		);
		});
};

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

	var id = snap.key;
	var stringID = id.toString();
	var county = snap.child("county").val();
	var name = snap.child("name").val();
	var contact = snap.child("contact").val();
	var restriction = snap.child("restriction").val();
	var notes = snap.child("notes").val();
	var url = snap.child("url").val();
	var service = snap.child("service").val();
  var phase = snap.child("phase").val();

//creates table based on user inputs
if(countyVal == county && phaseVal == phase && serviceVal == service) {
	$("#table_body").append("<tr><td><input id='"+id+"county' type='text' class='form-control' value=\""+county+"\" ></input></td><td><input id='"+id+"name' type='text'  value=\""+name+"\" ></input></td><td><input id='"+id+"contact' type='text'  value=\""+contact+"\" ></input></td><td><input id='"+id+"restriction' type='text'  value=\""+restriction+"\" ></input></td><td><input id='"+id+"url' type='text'  value=\""+url+"\" ></input></td><td><input id='"+id+"notes' type='text'  value=\""+notes+"\" ></input></td><td><input type='submit' class='btn btn-success btn-send' value='Delete' onclick='deleteResource(\""+ stringID + "\")'></input></td><td><input type='submit' class='btn btn-success btn-send' value='Update' onclick='updateResource(\""+ stringID + "\")''></input></td></tr>"
	);
}
else if (countyVal == county && phaseVal == false && serviceVal == false){
	$("#table_body").append("<tr><td><input id='"+id+"county' type='text' class='form-control' value=\""+county+"\" ></input></td><td><input id='"+id+"name' type='text'  value=\""+name+"\" ></input></td><td><input id='"+id+"contact' type='text'  value=\""+contact+"\" ></input></td><td><input id='"+id+"restriction' type='text'  value=\""+restriction+"\" ></input></td><td><input id='"+id+"url' type='text'  value=\""+url+"\" ></input></td><td><input id='"+id+"notes' type='text'  value=\""+notes+"\" ></input></td><td><input type='submit' class='btn btn-success btn-send' value='Delete' onclick='deleteResource(\""+ stringID + "\")'></input></td><td><input type='submit' class='btn btn-success btn-send' value='Update' onclick='updateResource(\""+ stringID + "\")''></input></td></tr>"
	);
}
else if (countyVal == county && phaseVal == phase && serviceVal == false){
	$("#table_body").append("<tr><td><input id='"+id+"county' type='text' class='form-control' value=\""+county+"\" ></input></td><td><input id='"+id+"name' type='text'  value=\""+name+"\" ></input></td><td><input id='"+id+"contact' type='text'  value=\""+contact+"\" ></input></td><td><input id='"+id+"restriction' type='text'  value=\""+restriction+"\" ></input></td><td><input id='"+id+"url' type='text'  value=\""+url+"\" ></input></td><td><input id='"+id+"notes' type='text'  value=\""+notes+"\" ></input></td><td><input type='submit' class='btn btn-success btn-send' value='Delete' onclick='deleteResource(\""+ stringID + "\")'></input></td><td><input type='submit' class='btn btn-success btn-send' value='Update' onclick='updateResource(\""+ stringID + "\")''></input></td></tr>"
	);
}
else if (countyVal == county && phaseVal == false && serviceVal == service){
	$("#table_body").append("<tr><td><input id='"+id+"county' type='text' class='form-control' value=\""+county+"\" ></input></td><td><input id='"+id+"name' type='text'  value=\""+name+"\" ></input></td><td><input id='"+id+"contact' type='text'  value=\""+contact+"\" ></input></td><td><input id='"+id+"restriction' type='text'  value=\""+restriction+"\" ></input></td><td><input id='"+id+"url' type='text'  value=\""+url+"\" ></input></td><td><input id='"+id+"notes' type='text'  value=\""+notes+"\" ></input></td><td><input type='submit' class='btn btn-success btn-send' value='Delete' onclick='deleteResource(\""+ stringID + "\")'></input></td><td><input type='submit' class='btn btn-success btn-send' value='Update' onclick='updateResource(\""+ stringID + "\")''></input></td></tr>"
	);
}
else if (countyVal == false && phaseVal == phase && serviceVal == false){
	$("#table_body").append("<tr><td><input id='"+id+"county' type='text' class='form-control' value=\""+county+"\" ></input></td><td><input id='"+id+"name' type='text'  value=\""+name+"\" ></input></td><td><input id='"+id+"contact' type='text'  value=\""+contact+"\" ></input></td><td><input id='"+id+"restriction' type='text'  value=\""+restriction+"\" ></input></td><td><input id='"+id+"url' type='text'  value=\""+url+"\" ></input></td><td><input id='"+id+"notes' type='text'  value=\""+notes+"\" ></input></td><td><input type='submit' class='btn btn-success btn-send' value='Delete' onclick='deleteResource(\""+ stringID + "\")'></input></td><td><input type='submit' class='btn btn-success btn-send' value='Update' onclick='updateResource(\""+ stringID + "\")''></input></td></tr>"
	);
}
else if (countyVal == false && phaseVal == phase && serviceVal == service){
	$("#table_body").append("<tr><td><input id='"+id+"county' type='text' class='form-control' value=\""+county+"\" ></input></td><td><input id='"+id+"name' type='text'  value=\""+name+"\" ></input></td><td><input id='"+id+"contact' type='text'  value=\""+contact+"\" ></input></td><td><input id='"+id+"restriction' type='text'  value=\""+restriction+"\" ></input></td><td><input id='"+id+"url' type='text'  value=\""+url+"\" ></input></td><td><input id='"+id+"notes' type='text'  value=\""+notes+"\" ></input></td><td><input type='submit' class='btn btn-success btn-send' value='Delete' onclick='deleteResource(\""+ stringID + "\")'></input></td><td><input type='submit' class='btn btn-success btn-send' value='Update' onclick='updateResource(\""+ stringID + "\")''></input></td></tr>"
	);
}

else if (countyVal == false && phaseVal == false && serviceVal == service){
	$("#table_body").append("<tr><td><input id='"+id+"county' type='text' class='form-control' value=\""+county+"\" ></input></td><td><input id='"+id+"name' type='text'  value=\""+name+"\" ></input></td><td><input id='"+id+"contact' type='text'  value=\""+contact+"\" ></input></td><td><input id='"+id+"restriction' type='text'  value=\""+restriction+"\" ></input></td><td><input id='"+id+"url' type='text'  value=\""+url+"\" ></input></td><td><input id='"+id+"notes' type='text'  value=\""+notes+"\" ></input></td><td><input type='submit' class='btn btn-success btn-send' value='Delete' onclick='deleteResource(\""+ stringID + "\")'></input></td><td><input type='submit' class='btn btn-success btn-send' value='Update' onclick='updateResource(\""+ stringID + "\")''></input></td></tr>"
	);
}



});
};
