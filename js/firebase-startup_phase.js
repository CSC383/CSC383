


function myFunction() {




		var tableRef = document.getElementById('table_body');
		while ( tableRef.rows.length > 0 )
		{
		 tableRef.deleteRow(0);
		}

		var tableRef2 = document.getElementById('table_body2');
		while ( tableRef2.rows.length > 0 )
		{
		 tableRef2.deleteRow(0);
		}

		var tableRef3 = document.getElementById('table_body3');
		while ( tableRef3.rows.length > 0 )
		{
		 tableRef3.deleteRow(0);
		}

		var tableRef4 = document.getElementById('table_body4');
		while ( tableRef4.rows.length > 0 )
		{
		 tableRef4.deleteRow(0);
		}

		var tableRef5 = document.getElementById('table_body5');
		while ( tableRef5.rows.length > 0 )
		{
		 tableRef5.deleteRow(0);
		}

		var tableRef6 = document.getElementById('table_body6');
		while ( tableRef6.rows.length > 0 )
		{
		 tableRef6.deleteRow(0);
		}

		var tableRef7 = document.getElementById('table_body7');
		while ( tableRef7.rows.length > 0 )
		{
		 tableRef7.deleteRow(0);
		}

		var tableRef8 = document.getElementById('table_body8');
		while ( tableRef8.rows.length > 0 )
		{
		 tableRef8.deleteRow(0);
		}

var x = document.getElementById("mySelect").value;
//add resources to idea phase tables
rootref.child("Resources").on("child_added", snap => {

	var county = snap.child("county").val();
	var name = snap.child("name").val();
	var contact = snap.child("contact").val();
	var restriction = snap.child("restriction").val();
	var notes = snap.child("notes").val();
	var url = snap.child("url").val();
	var service = snap.child("service").val();
  var phase = snap.child("phase").val();


if(county == x) {
	if(service == "office space" && phase == "startup" ){
	$("#table_body").append("<tr><td>" + county + "</td><td>" + name + "</td><td>" + contact +
						  "</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
						  "</a></td><td>" + notes + "</td></tr>");
	}
	else if(service == "maker space" && phase == "startup" ){
	$("#table_body2").append("<tr><td>" + county + "</td><td>" + name + "</td><td>" + contact +
						  "</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
						  "</a></td><td>" + notes + "</td></tr>");
	}

	else if(service == "kitchen/market" && phase == "startup" ){
	$("#table_body3").append("<tr><td>" + county + "</td><td>" + name + "</td><td>" + contact +
						  "</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
						  "</a></td><td>" + notes + "</td></tr>");
	}

	else if(service == "workshop/competitions" && phase == "startup" ){
	$("#table_body4").append("<tr><td>" + county + "</td><td>" + name + "</td><td>" + contact +
						  "</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
						  "</a></td><td>" + notes + "</td></tr>");
	}

	else if(service == "counseling" && phase == "startup" ){
	$("#table_body5").append("<tr><td>" + county + "</td><td>" + name + "</td><td>" + contact +
						  "</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
						  "</a></td><td>" + notes + "</td></tr>");
	}

	else if(service == "funding" && phase == "startup" ){
	$("#table_body6").append("<tr><td>" + county + "</td><td>" + name + "</td><td>" + contact +
						  "</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
						  "</a></td><td>" + notes + "</td></tr>");
	}

	else if(service == "professional services" && phase == "startup" ){
	$("#table_body7").append("<tr><td>" + county + "</td><td>" + name + "</td><td>" + contact +
						  "</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
						  "</a></td><td>" + notes + "</td></tr>");
	}

	else if(service == "real estate assistance" && phase == "startup" ){
	$("#table_body8").append("<tr><td>" + county + "</td><td>" + name + "</td><td>" + contact +
						  "</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
						  "</a></td><td>" + notes + "</td></tr>");
	}
}





});
};
