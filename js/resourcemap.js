var map;
var addressBar;


function init() {
   var mapOptions = {
      center: new google.maps.LatLng(43.020054,-83.693008),
      zoom: 9,
      mapTypeId: 'roadmap',
   };

   map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

   // a new Info Window is created
   addressBar = new google.maps.InfoWindow();

   // close the Info Window with a click on the map
   google.maps.event.addListener(map, 'click', function() {
      addressBar.close();
   });
	
   
	// function called to create markers
   addAdressesToMap();
	
}
google.maps.event.addDomListener(window, 'load', init);





function addAdressesToMap(){
	var addresses = firebase.database().ref('Resources').orderByKey();
	addresses.once('value', function(snapshot){
  	var addressArray = new Array();
  	snapshot.forEach(function(childSnapshot){
  	var addr = childSnapshot.key;
  	var childData = addr;
  	addressArray.push(childData);
  })
  createmap(addressArray);  
})
  
}

function createmap(aArray){
	var bounds = new google.maps.LatLngBounds();
	for (var i = 0; i < aArray.length; i++){
	  var ref1 = firebase.database().ref('Resources').child(aArray[i]);
	  ref1.once('value', function(snapshot){
      var refval = snapshot.val();
      var address = refval.address;
	  
	  var lat = refval.lat;
	  var lng = refval.lng;
      var name = refval.name;
      var phone = refval.phone;
	  var service = refval.service;
	  var latlng = new google.maps.LatLng(lat, lng); 
	  bounds.extend(latlng);
	  createMarker(latlng, name, address, phone, service)
	  map.fitBounds(bounds);
	  })
	  }
	  
    
  
}

// creates marker and set Info Window content
function createMarker(latlng, name, address, phone, service){
   if (service ==="office space"){
		   var marker = new google.maps.Marker({
			  map: map,
			  position: latlng,
			  title: name,
			  icon: "img/GMM/space.png"
		   });
   }
		else if (service ==="real estate assistance"){
			var marker = new google.maps.Marker({
			  map: map,
			  position: latlng,
			  title: name,
			  icon: "img/GMM/Business Consultation.png"
		   });
		}
		else if (service === "funding"){
			var marker = new google.maps.Marker({
				  map: map,
				  position: latlng,
				  title: name,
				  icon: "img/GMM/financial.png"
			   });
		}
		else if (service ==="professional services"){	   
			var marker = new google.maps.Marker({
				  map: map,
				  position: latlng,
				  title: name,
				  icon: "img/GMM/Information.png"
			   });
		}
		else if (service === "workshops/competitions"){
			var marker = new google.maps.Marker({
				  map: map,
				  position: latlng,
				  title: name,
				  icon: "img/GMM/legal.png"
			   });
		}
		else{
			var marker = new google.maps.Marker({
				  map: map,
				  position: latlng,
				  title: name,
				  icon: "img/GMM/contract.png"
			   });
   }		   
   //click on a marker
   google.maps.event.addListener(marker, 'click', function() {
      
      //insert info to addressBar
      var iwContent = '<div id="iw_container">' +
            '<div class="iw_title">' + name + '</div>' +
         '<div class="iw_content">' + address + '<br />' +
         phone + '<br />' +
         service +'</div></div>';
      
      // including content to the Info Window.
      addressBar.setContent(iwContent);

      // open the Info Window at the current marker location.
      addressBar.open(map, marker);
   });
}
