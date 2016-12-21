



app.signOut = function() {
	// Sign out
	firebase.auth().signOut();
};

//listen to auth state changes
firebase.auth().onAuthStateChanged(function(user) {
		app.user = user;
		console.log('user', user);
});
