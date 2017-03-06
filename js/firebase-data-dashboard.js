window.onload = function(){
	// Initialize Firebase
				
				//Sets the content of question 1 to match firebase
				var labor_force_size = document.getElementById('labor_force_size')
				var labor_force_size_ref = firebase.database().ref('Data_Dashboard').child('labor_force_size');
				labor_force_size_ref_ref.on('value', snap => labor_force_size.innerText = snap.val());
        
        }
