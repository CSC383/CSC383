window.onload = function(){
		var labor_force_size = document.getElementById('labor_force_size')
		var labor_force_size_ref = firebase.database().ref('data_dashboard').child('labor_force_size');
		labor_force_size_ref.on('value', snap => labor_force_size.innerText = snap.val());
        };
