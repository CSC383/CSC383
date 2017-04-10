//This page handles all resources page content

//encodes any apostrophes in a string into an escape character
function encodeApos (input)
{

  var encoded = input.replace(/'/g, "/'");

  return encoded;
}

//decodes any apostrophe escapes back into apostrophes
function decodeApos(input)
{
  var decoded= input.replace(//'/g, "'");
  return decoded;
}

//defines and appends the submit button for the resource modal
function makeModal(input)
{
	var inputClean = decodeURIComponent(input);
	$('#modalHeading').html("");
	$('#myModal').modal('toggle');
	$('#modalHeading').append("<h4 class='modal-title'>"+ inputClean +"</h4>");


  rootref.child("resources").orderByChild("name").equalTo(inputClean).on("child_added", function(snap)
  {
    var nameOf = snap.child("name").val();

    $("#modalSubmit").append("<input onclick='makeReview(\""+ nameOF +"\")' type='submit' class='btn btn-success btn-send' value='Submit'")
  });
    return true;
};


//Loads all resources on page load
window.onload = allResources();


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
		var nameCoded = encodeApos(name);

		//Creates table with resources pulled from firebase
		$("#table_body").append("<tr><td>"+ county +"</td><td><a onClick='makeModal(\""+ nameCoded +"\")'>" + name + "</a></td><td>"+ address +"</td><td>"+ phone +"</td><td>" + contact +
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
rootref.child("Resources").on("child_added", function(snap) {

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
	var phase = snap.child("phase").val();
	var service = snap.child("service").val();

//creates table based on user inputs
if(countyVal == county && phaseVal == phase && serviceVal == service) {
	$("#table_body").append("<tr><td>"+ county +"</td><td>" + name + "</td><td>"+ address +"</td><td>"+ phone +"</td><td>" + contact +
							"</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
							"</a></td><td>" + notes + "</td></tr>");
}
else if (countyVal == county && phaseVal == false && serviceVal == false){
	$("#table_body").append("<tr><td>"+ county +"</td><td>" + name + "</td><td>"+ address +"</td><td>"+ phone +"</td><td>" + contact +
							"</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
							"</a></td><td>" + notes + "</td></tr>");
}
else if (countyVal == county && phaseVal == phase && serviceVal == false){
	$("#table_body").append("<tr><td>"+ county +"</td><td>" + name + "</td><td>"+ address +"</td><td>"+ phone +"</td><td>" + contact +
							"</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
							"</a></td><td>" + notes + "</td></tr>");
}
else if (countyVal == county && phaseVal == false && serviceVal == service){
	$("#table_body").append("<tr><td>"+ county +"</td><td>" + name + "</td><td>"+ address +"</td><td>"+ phone +"</td><td>" + contact +
							"</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
							"</a></td><td>" + notes + "</td></tr>");
}
else if (countyVal == false && phaseVal == phase && serviceVal == false){
	$("#table_body").append("<tr><td>"+ county +"</td><td>" + name + "</td><td>"+ address +"</td><td>"+ phone +"</td><td>" + contact +
							"</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
							"</a></td><td>" + notes + "</td></tr>");
}
else if (countyVal == false && phaseVal == phase && serviceVal == service){
	$("#table_body").append("<tr><td>"+ county +"</td><td>" + name + "</td><td>"+ address +"</td><td>"+ phone +"</td><td>" + contact +
							"</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
							"</a></td><td>" + notes + "</td></tr>");
}

else if (countyVal == false && phaseVal == false && serviceVal == service){
	$("#table_body").append("<tr><td>"+ county +"</td><td>" + name + "</td><td>"+ address +"</td><td>"+ phone +"</td><td>" + contact +
							"</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
							"</a></td><td>" + notes + "</td></tr>");
}



});
};
