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


	if(service == "office space" && phase == "veteran" ){
	$("#table_body").append("<tr><td>" + county + "</td><td>" + name + "</td><td>" + contact +
						  "</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
						  "</a></td><td>" + notes + "</td></tr>");
	}
	else if(service == "maker space" && phase == "veteran" ){
	$("#table_body2").append("<tr><td>" + county + "</td><td>" + name + "</td><td>" + contact +
						  "</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
						  "</a></td><td>" + notes + "</td></tr>");
	}

	else if(service == "kitchen/market" && phase == "veteran" ){
	$("#table_body3").append("<tr><td>" + county + "</td><td>" + name + "</td><td>" + contact +
						  "</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
						  "</a></td><td>" + notes + "</td></tr>");
	}

	else if(service == "workshop/competitions" && phase == "veteran" ){
	$("#table_body4").append("<tr><td>" + county + "</td><td>" + name + "</td><td>" + contact +
						  "</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
						  "</a></td><td>" + notes + "</td></tr>");
	}

	else if(service == "counseling" && phase == "veteran" ){
	$("#table_body5").append("<tr><td>" + county + "</td><td>" + name + "</td><td>" + contact +
						  "</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
						  "</a></td><td>" + notes + "</td></tr>");
	}

	else if(service == "funding" && phase == "veteran" ){
	$("#table_body6").append("<tr><td>" + county + "</td><td>" + name + "</td><td>" + contact +
						  "</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
						  "</a></td><td>" + notes + "</td></tr>");
	}

	else if(service == "professional services" && phase == "veteran" ){
	$("#table_body7").append("<tr><td>" + county + "</td><td>" + name + "</td><td>" + contact +
						  "</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
						  "</a></td><td>" + notes + "</td></tr>");
	}

	else if(service == "real estate assistance" && phase == "veteran" ){
	$("#table_body8").append("<tr><td>" + county + "</td><td>" + name + "</td><td>" + contact +
						  "</td><td>" + restriction + "</td><td><a href=" + url +">" + url +
						  "</a></td><td>" + notes + "</td></tr>");
	}





});
