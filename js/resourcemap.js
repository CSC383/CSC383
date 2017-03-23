var map;
var addressBar;

// markersData 
var markersData = [
   {
      lat: 43.040906,
      lng: -83.693678,
      name: "Oak Business Center",
      address1:"2712 Saginaw St# 106,",
      address2: "Flint, MI 48505",
      phone: "(810) 235-5555",
	  type: "Business Consultation"	  
   },
   {
      lat: 43.016650,
      lng: -83.687726,
      name: "Flint Foodworks",
      address1:"300 E. First St.",
      address2: "Flint, MI 48502",
      phone: "(810) 447-0714",
	  type: "Business Resource"
   },
   {
      lat: 43.021609,
      lng: -83.679291,
      name: "Flint Public Library",
      address1:"1026 E Kearsley St,",
      address2: "Flint, MI 48503",
      phone: "(810) 232-7111",
	  type: "Information Resource"
	  
   }, 
   {
      lat: 43.020796,
      lng: -83.641771,
      name: "Goodwill Industries flint",
      address1:"501 S Averill Ave,",
      address2: "Flint, MI 48506",
      phone: "(810) 762-9960",
	  type: "Office Space"
	  
   },
   {
      lat: 43.015820,
      lng: -83.690112,
      name: "Flint & Genesee Chamber of Commerce",
      address1:"519 Saginaw St #200,",
      address2: "Flint, MI 48502",
      phone: "(810) 600-1404",
	  type: "Legal"
   },
   {
      lat: 43.012367,
      lng: -83.712643,
      name: "Small Business Development Center",
      address1:"1700 University Ave,",
      address2: "Flint, MI 48504",
      phone: "(810) 762-9660", 
	  type: "Business Consultation" 
   },
   {
      lat: 43.015594,
      lng: -83.691933,
      name: "Flint Steamworks",
      address1:"124 W 1st St,",
      address2: "Flint, MI 48502",
      phone: "N/A",
	  type: "Information Resource"
   }
];


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
   createMarkers();
}
google.maps.event.addDomListener(window, 'load', init);



function createMarkers(){

   // this variable sets the map bounds according to markers position
   var bounds = new google.maps.LatLngBounds();
   
   // for loop traverses markersData array calling createMarker function for each marker 
   for (var i = 0; i < markersData.length; i++){

      var latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
      var name = markersData[i].name;
      var address1 = markersData[i].address1;
      var address2 = markersData[i].address2;
      var phone = markersData[i].phone;
	  var type = markersData[i].type;
	
      createMarker(latlng, name, address1, address2, phone, type);

      // marker position is added to bounds variable
      bounds.extend(latlng);  
   }

   // Finally the bounds variable is used to set the map bounds
   // with fitBounds() function
   map.fitBounds(bounds);
}

// creates marker and set Info Window content
function createMarker(latlng, name, address1, address2, phone, type){
   if (type ==="Office Space"){
		   var marker = new google.maps.Marker({
			  map: map,
			  position: latlng,
			  title: name,
			  icon: "img/GMM/space.png"
		   });
   }
		else if (type ==="Business Consultation"){
			var marker = new google.maps.Marker({
			  map: map,
			  position: latlng,
			  title: name,
			  icon: "img/GMM/Business Consultation.png"
		   });
		}
		else if (type === "Business Resource"){
			var marker = new google.maps.Marker({
				  map: map,
				  position: latlng,
				  title: name,
				  icon: "img/GMM/financial.png"
			   });
		}
		else if (type ==="Information Resource"){	   
			var marker = new google.maps.Marker({
				  map: map,
				  position: latlng,
				  title: name,
				  icon: "img/GMM/Information.png"
			   });
		}
		else if (type === "Legal"){
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
         '<div class="iw_content">' + address1 + '<br />' +
         address2 + '<br />' +
         phone + '</div></div>';
      
      // including content to the Info Window.
      addressBar.setContent(iwContent);

      // open the Info Window at the current marker location.
      addressBar.open(map, marker);
   });
}
