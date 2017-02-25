//This page handles all resources page content




//Loads all resources on page load
window.onload = allResources();

//Filters all resources
function allResources() {

	//Clears table of resources
	var tableRef = document.getElementById('table_body');
	while ( tableRef.rows.length > 0 )
	{
	 tableRef.deleteRow(0);
	}

	//Pull resources from Firebase database
	rootref.child("Resources").on("child_added", snap => {

		var county = snap.child("county").val();
		var name = snap.child("name").val();
		var contact = snap.child("contact").val();
		var restriction = snap.child("restriction").val();
		var notes = snap.child("notes").val();
		var url = snap.child("url").val();
		var service = snap.child("service").val();
	  var phase = snap.child("phase").val();


		//Creates table with resources pulled from firebase
		$("#table_body").append("<tr><td>" + county + "</td><td>" + name + "</td><td>" + contact +
							  "</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
							  "</a></td><td>" + notes + "</td></tr>");
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
rootref.child("Resources").on("child_added", snap => {

	var county = snap.child("county").val();
	var name = snap.child("name").val();
	var contact = snap.child("contact").val();
	var restriction = snap.child("restriction").val();
	var notes = snap.child("notes").val();
	var url = snap.child("url").val();
	var service = snap.child("service").val();
  var phase = snap.child("phase").val();

//creates table based on user inputs
if(county == countyVal && phase == phaseVal && service == serviceVal) {
	$("#table_body").append("<tr><td>" + county + "</td><td>" + name + "</td><td>" + contact +
						  "</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
						  "</a></td><td>" + notes + "</td></tr>");
}





});
};
