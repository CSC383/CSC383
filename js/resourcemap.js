var map;
var addressBar;
var geocoder;
var i = 0;
// markersData 
var markersData = [
   {
      arrAddress: "2712 Saginaw St# 106, Flint, MI 48505",
      name: "Oak Business Center",
      address1:"2712 Saginaw St# 106,",
      address2: "Flint, MI 48505",
      phone: "(810) 235-5555" 
   },
   {
	  arrAddress: "300 E. First St. Flint, MI 48502",
      name: "Flint Foodworks",
      address1:"300 E. First St.",
      address2: "Flint, MI 48502",
      phone: "(810) 447-0714" 
   },
   {
	  arrAddress:"1026 E Kearsley St, Flint, MI 48503", 
      name: "Flint Public Library",
      address1:"1026 E Kearsley St,",
      address2: "Flint, MI 48503",
      phone: "(810) 232-7111" 
   }, 
   {
	  arrAddress: "501 S Averill Ave, Flint, MI 48506", 
      name: "Goodwill Industries flint",
      address1:"501 S Averill Ave,",
      address2: "Flint, MI 48506",
      phone: "(810) 762-9960" 
   },
   {
	  arrAddress: "519 Saginaw St #200, Flint, MI 48502", 
      name: "Flint & Genesee Chamber of Commerce",
      address1:"519 Saginaw St #200,",
      address2: "Flint, MI 48502",
      phone: "(810) 600-1404" 
   },
   {
	  arrAddress: "1700 University Ave, Flint, MI 48504", 
      name: "Small Business Development Center",
      address1:"1700 University Ave,",
      address2: "Flint, MI 48504",
      phone: "(810) 762-9660" 
   },
   {
	  arrAddress: "124 W 1st St, Flint, MI 48502", 
      name: "Flint Steamworks",
      address1: "124 W 1st St,",
      address2: "Flint, MI 48502",
      phone: "N/A" 
   }
];


function init() {
   geocoder = new google.maps.Geocoder();
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
   createMarkers(i);
}
google.maps.event.addDomListener(window, 'load', init);



function createMarkers(i){

   //this variable sets the map bounds according to markers position
   var bounds = new google.maps.LatLngBounds();
   
   //for loop traverses markersData array calling createMarker function for each marker 
   
		
		//var latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
		

		codeAddress(i)
		
		// marker position is added to bounds variable
		bounds.extend(latlng);  
		
		

   // Finally the bounds variable is used to set the map bounds
   // with fitBounds() function
   map.fitBounds(bounds);
//}


// creates marker and set Info Window content
function createMarker(latlng, i){
   
		
		//var latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
		  
		
		
   var marker = new google.maps.Marker({
     map: map,
     position: latlng,
     title: markersData[i].name
   });

   //click on a marker
   
   google.maps.event.addListener(marker, 'click', function() {
      
      //insert info to addressBar
      var iwContent = '<div id="iw_container">' +
            '<div class="iw_title">' + markersData[i - 1].name + '</div>' +
         '<div class="iw_content">' + markersData[i - 1].address1 + '<br />' +
         markersData[i - 1].address2 + '<br />' +
         markersData[i - 1].phone + '</div></div>';
      
      // including content to the Info Window.
      addressBar.setContent(iwContent);

      // open the Info Window at the current marker location.
      addressBar.open(map, marker);
   });
   
   i = i + 1;
   createMarkers(i);
}

function codeAddress(i){
	
	geocoder.geocode({address: markersData[i].arrAddress}, function geocodeResult(results, status) {
         if (status == google.maps.GeocoderStatus.OK)
    {
        var latlng = results[0].geometry.location;
		
    } else if (status == google.maps.GeocoderStatus.ZERO_RESULTS) {
        alert("Bad destination address.");
    } else {
        alert("Error calling Google Geocode API.");
    }
	
    createMarker(latlng, i);   
          });
	
		
	}
	
   }