//This page handles all resources page content


//jquery for phone fields
$(".required").keyup(function () {
    if (this.value.length == this.maxLength) {
      var $next = $(this).next('.required');
      if ($next.length)
          $(this).next('.required').focus();
      else
          $(this).blur();
    }
});

const btnLogout = document.getElementById('btnLogout');

//Add logout event
btnLogout.addEventListener('click', e => {
	auth.signOut();

});

const auth = firebase.auth();

//Add a realtime listener
auth.onAuthStateChanged(function(firebaseUser) {
	if(firebaseUser) {
		console.log(firebaseUser);
		btnLogout.classList.remove('hide');

    console.log(firebaseUser.email);

	} else {
		console.log('not logged in');
		btnLogout.classList.add('hide');
	}


});

//Loads all statistics on page load
window.onload = allStatistics();
var statRef = firebase.database();

function updateStatistics(statisticID) {
	var id = statisticID;
	var statValue = id + "Value";

	var valueUpdate = document.getElementById(statValue);
	statRef.ref("data_dashboard").child(statisticID).update(valueUpdate);
};

//Filters all statistics
function allStatistics() {

	//Clears table of statistics
	var tableRef = document.getElementById('table_body');
	while ( tableRef.rows.length > 0 )
	{
	 tableRef.deleteRow(0);
	}

	//Pull statistics from Firebase database
	rootref.child("data_dashboard").on("child_added", function(snap) {

		//store data from firebase to be used in table
		var id = snap.key;
		var stringID = id.toString();
		var statValue = snap.val();

		//Creates table with statistics pulled from firebase
		$("#table_body").append("<tr><td><input id='"+id+"Statistic' type='text' value=\""+stringID+"\" ></input></td><td><input id='"+id+"Value' type='text'  value=\""+statValue+"\" ></input></td><td></td><td><input type='submit' class='btn btn-success btn-send' value='Update' onclick='updateStatistic(\""+ stringID + "\")''></input></td></tr>"
		);
		});
};
