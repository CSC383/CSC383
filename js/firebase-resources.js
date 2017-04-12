//This page handles all resources page content

//encodes any apostrophes in a string into an escape character
function encodeApos (input)
{

  var encoded = input.replace(/'/g, "&apos");
  return encoded;
}

//decodes any apostrophe escapes back into apostrophes
function decodeApos(input)
{
  var decoded= input.replace(/&apos/g, "'");
  return decoded;
}

//defines and appends the submit button for the resource modal
function makeModal(input, id)
{

var inputClean = decodeApos(input);

	$('#modalHeading').html("");
	$('#myModal').modal('toggle');
	$('#modalHeading').append("<h4 class='modal-title'>"+ inputClean +"</h4>");
	console.log(inputClean);

	printReviews(inputClean);


    $("#modalSubmit").append("<input onclick='makeReview(\"" + id + "\")' type='submit' class='btn btn-success btn-send' value='Submit'>");

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
		$("#table_body").append("<tr><td>"+ county +"</td><td><a class='black' onClick='makeModal(\""+ nameCoded +"\",\""+ id +"\")'>" + name + "</a></td><td>"+ address +"</td><td>"+ phone +"</td><td>" + contact +
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
	var nameCoded = encodeApos(name);

//creates table based on user inputs
if(countyVal == county && phaseVal == phase && serviceVal == service) {
	$("#table_body").append("<tr><td>"+ county +"</td><td><a class='black' onClick='makeModal(\""+ nameCoded +"\",\""+ id +"\")'>" + name + "</a></td><td>"+ address +"</td><td>"+ phone +"</td><td>" + contact +
							"</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
							"</a></td><td>" + notes + "</td></tr>");
}
else if (countyVal == county && phaseVal == false && serviceVal == false){
	$("#table_body").append("<tr><td>"+ county +"</td><td><a class='black' onClick='makeModal(\""+ nameCoded +"\",\""+ id +"\")'>" + name + "</a></td><td>"+ address +"</td><td>"+ phone +"</td><td>" + contact +
							"</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
							"</a></td><td>" + notes + "</td></tr>");
}
else if (countyVal == county && phaseVal == phase && serviceVal == false){
	$("#table_body").append("<tr><td>"+ county +"</td><td><a class='black' onClick='makeModal(\""+ nameCoded +"\",\""+ id +"\")'>" + name + "</a></td><td>"+ address +"</td><td>"+ phone +"</td><td>" + contact +
							"</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
							"</a></td><td>" + notes + "</td></tr>");
}
else if (countyVal == county && phaseVal == false && serviceVal == service){
	$("#table_body").append("<tr><td>"+ county +"</td><td><a class='black' onClick='makeModal(\""+ nameCoded +"\",\""+ id +"\")'>" + name + "</a></td><td>"+ address +"</td><td>"+ phone +"</td><td>" + contact +
							"</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
							"</a></td><td>" + notes + "</td></tr>");
}
else if (countyVal == false && phaseVal == phase && serviceVal == false){
	$("#table_body").append("<tr><td>"+ county +"</td><td><a class='black' onClick='makeModal(\""+ nameCoded +"\",\""+ id +"\")'>" + name + "</a></td><td>"+ address +"</td><td>"+ phone +"</td><td>" + contact +
							"</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
							"</a></td><td>" + notes + "</td></tr>");
}
else if (countyVal == false && phaseVal == phase && serviceVal == service){
	$("#table_body").append("<tr><td>"+ county +"</td><td><a class='black' onClick='makeModal(\""+ nameCoded +"\",\""+ id +"\")'>" + name + "</a></td><td>"+ address +"</td><td>"+ phone +"</td><td>" + contact +
							"</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
							"</a></td><td>" + notes + "</td></tr>");
}

else if (countyVal == false && phaseVal == false && serviceVal == service){
	$("#table_body").append("<tr><td>"+ county +"</td><td><a class='black' onClick='makeModal(\""+ nameCoded +"\",\""+ id +"\")'>" + name + "</a></td><td>"+ address +"</td><td>"+ phone +"</td><td>" + contact +
							"</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
							"</a></td><td>" + notes + "</td></tr>");
}



});
};

function printReviews(input)
{
  var resourceRef = rootref.child("Resources");
  var inputClean = decodeApos(input);


  resourceRef.orderByChild("name").equalTo(inputClean).on("child_added", function(snap)
  {
    snap.child("reviews").forEach(function(shot)
    {
      
      var user = shot.child("user").val();
      var rating = shot.child("rating").val();
      var rBody = shot.child("text").val();
      if (rating != 0)
      {
	$("#modal_body").append("<tr><td>" + user + "</td><td>" + rating + "</td></tr><tr><td>" + rBody+ "</td></tr>");
      }
    });
  },
  function(error)
  {
    $("#modal_body").append("<tr><td>Sorry! No one has reviewed this content! Be the first!</td></tr>")
  });
}

function makeReview(input)
{
  var rBody = document.getElementById("rMaker");
  var score = document.getElementById("rater");
  var userID = document.getElementById("username");
  var inputClean = decodeApos(input);
	var ref;

  rootref.child("Resources").child(input).child("reviews").push().set(
{
	user: "" + userID.value + "",
	rating: "" + score.value + "",
	text: "" + rBody.value + ""

}
);
		window.location.reload()
};

function calcAggregateRating(input)
{
  var i = 0;
  var j = 0;
  rootref.child("Resources").orderByChild("name").equalTo(input).once("child_added", function(snap)
  {
    snap.child("reviews").forEach(function(shot)
    {
      j = j + shot.child("rating").val();
      i++;

    });
  });

  var rating = j/i;


}
