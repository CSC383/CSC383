window.onload = function(){
	// Initialize Firebase
				
				
				//Sets the content of question 1 to match firebase
				var q1 = document.getElementById('Q1')
				var q1ref = firebase.database().ref('Questions').child('Question1');
				q1ref.on('value', snap => q1.innerText = snap.val());
				
				
				//Sets the content of question 2 to match firebase
				var q2 = document.getElementById('Q2')
				var q2ref = firebase.database().ref('Questions').child('Question2');
				q2ref.on('value', snap => q2.innerText = snap.val());
					//Gets the different options id's form html
					var q2o1 = document.getElementById('Q2O1')
					var q2o2 = document.getElementById('Q2O2')
					//Makes a reference to the firebase option spots
					var q2o1ref = firebase.database().ref('Question Options').child('Question2').child('Option1');
					var q2o2ref = firebase.database().ref('Question Options').child('Question2').child('Option2');
					//Sets the values of the html id's to those of the ones in the database
					q2o1ref.on('value', snap => q2o1.innerText = snap.val());
					q2o2ref.on('value', snap => q2o2.innerText = snap.val());
				
				//Sets the content of question 3 to match firebase
				var q3 = document.getElementById('Q3')
				var q3ref = firebase.database().ref('Questions').child('Question3');
				q3ref.on('value', snap => q3.innerText = snap.val());
				
				
				//Sets the content of question 4 to match firebase
				var q4 = document.getElementById('Q4')
				var q4ref = firebase.database().ref('Questions').child('Question4');
				q4ref.on('value', snap => q4.innerText = snap.val());
					//Gets the different options id's form html
					var q4o1 = document.getElementById('Q4O1')
					var q4o2 = document.getElementById('Q4O2')
					var q4o3 = document.getElementById('Q4O3')
					var q4o4 = document.getElementById('Q4O4')
					//Makes a reference to the firebase option spots
					var q4o1ref = firebase.database().ref('Question Options').child('Question4').child('Option1');
					var q4o2ref = firebase.database().ref('Question Options').child('Question4').child('Option2');
					var q4o3ref = firebase.database().ref('Question Options').child('Question4').child('Option3');
					var q4o4ref = firebase.database().ref('Question Options').child('Question4').child('Option4');
					//Sets the values of the html id's to those of the ones in the database
					q4o1ref.on('value', snap => q4o1.innerText = snap.val());
					q4o2ref.on('value', snap => q4o2.innerText = snap.val());
					q4o3ref.on('value', snap => q4o3.innerText = snap.val());
					q4o4ref.on('value', snap => q4o4.innerText = snap.val());
				
				//Sets the content of question 5 to match firebase
				var q5 = document.getElementById('Q5')
				var q5ref = firebase.database().ref('Questions').child('Question5');
				q5ref.on('value', snap => q5.innerText = snap.val());
					//Gets the different options id's form html
					var q5o1 = document.getElementById('Q5O1')
					var q5o2 = document.getElementById('Q5O2')
					var q5o3 = document.getElementById('Q5O3')
					var q5o4 = document.getElementById('Q5O4')
					//Makes a reference to the firebase option spots
					var q5o1ref = firebase.database().ref('Question Options').child('Question5').child('Option1');
					var q5o2ref = firebase.database().ref('Question Options').child('Question5').child('Option2');
					var q5o3ref = firebase.database().ref('Question Options').child('Question5').child('Option3');
					var q5o4ref = firebase.database().ref('Question Options').child('Question5').child('Option4');
					//Sets the values of the html id's to those of the ones in the database
					q5o1ref.on('value', snap => q5o1.innerText = snap.val());
					q5o2ref.on('value', snap => q5o2.innerText = snap.val());
					q5o3ref.on('value', snap => q5o3.innerText = snap.val());
					q5o4ref.on('value', snap => q5o4.innerText = snap.val());
				
				//Sets the content of question 6 to match firebase
				var q6 = document.getElementById('Q6')
				var q6ref = firebase.database().ref('Questions').child('Question6');
				q6ref.on('value', snap => q6.innerText = snap.val());
					//Gets the different options id's form html
					var q6o1 = document.getElementById('Q6O1')
					var q6o2 = document.getElementById('Q6O2')
					var q6o3 = document.getElementById('Q6O3')
					var q6o4 = document.getElementById('Q6O4')
					var q6o5 = document.getElementById('Q6O5')
					var q6o6 = document.getElementById('Q6O6')
					var q6o7 = document.getElementById('Q6O7')
					//Makes a reference to the firebase option spots
					var q6o1ref = firebase.database().ref('Question Options').child('Question6').child('Option1');
					var q6o2ref = firebase.database().ref('Question Options').child('Question6').child('Option2');
					var q6o3ref = firebase.database().ref('Question Options').child('Question6').child('Option3');
					var q6o4ref = firebase.database().ref('Question Options').child('Question6').child('Option4');
					var q6o5ref = firebase.database().ref('Question Options').child('Question6').child('Option5');
					var q6o6ref = firebase.database().ref('Question Options').child('Question6').child('Option6');
					var q6o7ref = firebase.database().ref('Question Options').child('Question6').child('Option7');
					//Sets the values of the html id's to those of the ones in the database
					q6o1ref.on('value', snap => q6o1.innerText = snap.val());
					q6o2ref.on('value', snap => q6o2.innerText = snap.val());
					q6o3ref.on('value', snap => q6o3.innerText = snap.val());
					q6o4ref.on('value', snap => q6o4.innerText = snap.val());
					q6o5ref.on('value', snap => q6o5.innerText = snap.val());
					q6o6ref.on('value', snap => q6o6.innerText = snap.val());
					q6o7ref.on('value', snap => q6o7.innerText = snap.val());
					
				//Sets the content of question 7 to match firebase
				var q7 = document.getElementById('Q7')
				var q7ref = firebase.database().ref('Questions').child('Question7');
				q7ref.on('value', snap => q7.innerText = snap.val());
				
				//Sets the content of question 8 to match firebase
				var q8 = document.getElementById('Q8')
				var q8ref = firebase.database().ref('Questions').child('Question8');
				q8ref.on('value', snap => q8.innerText = snap.val());
					//Gets the different options id's form html
					var q8o1 = document.getElementById('Q8O1')
					var q8o2 = document.getElementById('Q8O2')
					//Makes a reference to the firebase option spots
					var q8o1ref = firebase.database().ref('Question Options').child('Question8').child('Option1');
					var q8o2ref = firebase.database().ref('Question Options').child('Question8').child('Option2');
					//Sets the values of the html id's to those of the ones in the database
					q8o1ref.on('value', snap => q8o1.innerText = snap.val());
					q8o2ref.on('value', snap => q8o2.innerText = snap.val());
					
				//Sets the content of question 9 to match firebase
				var q9 = document.getElementById('Q9')
				var q9ref = firebase.database().ref('Questions').child('Question9');
				q9ref.on('value', snap => q9.innerText = snap.val());
					//Gets the different options id's form html
					var q9o1 = document.getElementById('Q9O1')
					var q9o2 = document.getElementById('Q9O2')
					//Makes a reference to the firebase option spots
					var q9o1ref = firebase.database().ref('Question Options').child('Question9').child('Option1');
					var q9o2ref = firebase.database().ref('Question Options').child('Question9').child('Option2');
					//Sets the values of the html id's to those of the ones in the database
					q9o1ref.on('value', snap => q9o1.innerText = snap.val());
					q9o2ref.on('value', snap => q9o2.innerText = snap.val());
				
				//Sets the content of question 10 to match firebase
				var q10 = document.getElementById('Q10')
				var q10ref = firebase.database().ref('Questions').child('Question10');
				q10ref.on('value', snap => q10.innerText = snap.val());
					//Gets the different options id's form html
					var q10o1 = document.getElementById('Q10O1')
					var q10o2 = document.getElementById('Q10O2')
					var q10o3 = document.getElementById('Q10O3')
					//Makes a reference to the firebase option spots
					var q10o1ref = firebase.database().ref('Question Options').child('Question10').child('Option1');
					var q10o2ref = firebase.database().ref('Question Options').child('Question10').child('Option2');
					var q10o3ref = firebase.database().ref('Question Options').child('Question10').child('Option3');
					//Sets the values of the html id's to those of the ones in the database
					q10o1ref.on('value', snap => q10o1.innerText = snap.val());
					q10o2ref.on('value', snap => q10o2.innerText = snap.val());
					q10o3ref.on('value', snap => q10o3.innerText = snap.val());
				
				//Sets the content of question 11 to match firebase
				var q11 = document.getElementById('Q11')
				var q11ref = firebase.database().ref('Questions').child('Question11');
				q11ref.on('value', snap => q11.innerText = snap.val());
				
				//Sets the content of question 12 to match firebase
				var q12 = document.getElementById('Q12')
				var q12ref = firebase.database().ref('Questions').child('Question12');
				q12ref.on('value', snap => q12.innerText = snap.val());
				
				//Sets the content of question 13 to match firebase
				var q13 = document.getElementById('Q13')
				var q13ref = firebase.database().ref('Questions').child('Question13');
				q13ref.on('value', snap => q13.innerText = snap.val());
				
				//Sets the content of question 14 to match firebase
				var q14 = document.getElementById('Q14')
				var q14ref = firebase.database().ref('Questions').child('Question14');
				q14ref.on('value', snap => q14.innerText = snap.val());
					//Gets the different options id's form html
					var q14o1 = document.getElementById('Q14O1')
					var q14o2 = document.getElementById('Q14O2')
					var q14o3 = document.getElementById('Q14O3')
					var q14o4 = document.getElementById('Q14O4')
					var q14o5 = document.getElementById('Q14O5')
					var q14o6 = document.getElementById('Q14O6')
					var q14o7 = document.getElementById('Q14O7')
					var q14o8 = document.getElementById('Q14O8')
					var q14o9 = document.getElementById('Q14O9')
					var q14o10 = document.getElementById('Q14O10')
					var q14o11 = document.getElementById('Q14O11')
					//Makes a reference to the firebase option spots
					var q14o1ref = firebase.database().ref('Question Options').child('Question14').child('Option1');
					var q14o2ref = firebase.database().ref('Question Options').child('Question14').child('Option2');
					var q14o3ref = firebase.database().ref('Question Options').child('Question14').child('Option3');
					var q14o4ref = firebase.database().ref('Question Options').child('Question14').child('Option4');
					var q14o5ref = firebase.database().ref('Question Options').child('Question14').child('Option5');
					var q14o6ref = firebase.database().ref('Question Options').child('Question14').child('Option6');
					var q14o7ref = firebase.database().ref('Question Options').child('Question14').child('Option7');
					var q14o8ref = firebase.database().ref('Question Options').child('Question14').child('Option8');
					var q14o9ref = firebase.database().ref('Question Options').child('Question14').child('Option9');
					var q14o10ref = firebase.database().ref('Question Options').child('Question14').child('Option10');
					var q14o11ref = firebase.database().ref('Question Options').child('Question14').child('Option11');
					//Sets the values of the html id's to those of the ones in the database
					q14o1ref.on('value', snap => q14o1.innerText = snap.val());
					q14o2ref.on('value', snap => q14o2.innerText = snap.val());
					q14o3ref.on('value', snap => q14o3.innerText = snap.val());
					q14o4ref.on('value', snap => q14o4.innerText = snap.val());
					q14o5ref.on('value', snap => q14o5.innerText = snap.val());
					q14o6ref.on('value', snap => q14o6.innerText = snap.val());
					q14o7ref.on('value', snap => q14o7.innerText = snap.val());
					q14o8ref.on('value', snap => q14o8.innerText = snap.val());
					q14o9ref.on('value', snap => q14o9.innerText = snap.val());
					q14o10ref.on('value', snap => q14o10.innerText = snap.val());
					q14o11ref.on('value', snap => q14o11.innerText = snap.val());
					
				//Sets the content of question 15 to match firebase
				var q15 = document.getElementById('Q15')
				var q15ref = firebase.database().ref('Questions').child('Question15');
				q15ref.on('value', snap => q15.innerText = snap.val());
				
				//Sets the content of question 16 to match firebase
				var q16 = document.getElementById('Q16')
				var q16ref = firebase.database().ref('Questions').child('Question16');
				q16ref.on('value', snap => q16.innerText = snap.val());
					//Gets the different options id's form html
					var q16o1 = document.getElementById('Q16O1')
					var q16o2 = document.getElementById('Q16O2')
					var q16o3 = document.getElementById('Q16O3')
					//Makes a reference to the firebase option spots
					var q16o1ref = firebase.database().ref('Question Options').child('Question16').child('Option1');
					var q16o2ref = firebase.database().ref('Question Options').child('Question16').child('Option2');
					var q16o3ref = firebase.database().ref('Question Options').child('Question16').child('Option3');
					//Sets the values of the html id's to those of the ones in the database
					q16o1ref.on('value', snap => q16o1.innerText = snap.val());
					q16o2ref.on('value', snap => q16o2.innerText = snap.val());
					q16o3ref.on('value', snap => q16o3.innerText = snap.val());
					
				//Sets the content of question 17 to match firebase
				var q17 = document.getElementById('Q17')
				var q17ref = firebase.database().ref('Questions').child('Question17');
				q17ref.on('value', snap => q17.innerText = snap.val());
					//Gets the different options id's form html
					var q17o1 = document.getElementById('Q17O1')
					var q17o2 = document.getElementById('Q17O2')
					var q17o3 = document.getElementById('Q17O3')
					var q17o4 = document.getElementById('Q17O4')
					var q17o5 = document.getElementById('Q17O5')
					var q17o6 = document.getElementById('Q17O6')
					var q17o7 = document.getElementById('Q17O7')
					var q17o8 = document.getElementById('Q17O8')
					var q17o9 = document.getElementById('Q17O9')
					var q17o10 = document.getElementById('Q17O10')
					//Makes a reference to the firebase option spots
					var q17o1ref = firebase.database().ref('Question Options').child('Question17').child('Option1');
					var q17o2ref = firebase.database().ref('Question Options').child('Question17').child('Option2');
					var q17o3ref = firebase.database().ref('Question Options').child('Question17').child('Option3');
					var q17o4ref = firebase.database().ref('Question Options').child('Question17').child('Option4');
					var q17o5ref = firebase.database().ref('Question Options').child('Question17').child('Option5');
					var q17o6ref = firebase.database().ref('Question Options').child('Question17').child('Option6');
					var q17o7ref = firebase.database().ref('Question Options').child('Question17').child('Option7');
					var q17o8ref = firebase.database().ref('Question Options').child('Question17').child('Option8');
					var q17o9ref = firebase.database().ref('Question Options').child('Question17').child('Option9');
					var q17o10ref = firebase.database().ref('Question Options').child('Question17').child('Option10');
					//Sets the values of the html id's to those of the ones in the database
					q17o1ref.on('value', snap => q17o1.innerText = snap.val());
					q17o2ref.on('value', snap => q17o2.innerText = snap.val());
					q17o3ref.on('value', snap => q17o3.innerText = snap.val());
					q17o4ref.on('value', snap => q17o4.innerText = snap.val());
					q17o5ref.on('value', snap => q17o5.innerText = snap.val());
					q17o6ref.on('value', snap => q17o6.innerText = snap.val());
					q17o7ref.on('value', snap => q17o7.innerText = snap.val());
					q17o8ref.on('value', snap => q17o8.innerText = snap.val());
					q17o9ref.on('value', snap => q17o9.innerText = snap.val());
					q17o10ref.on('value', snap => q17o10.innerText = snap.val());
					
					
					
					//Hide the other options in the questionnaire that allows users to 
					//enter their own choice
					
						//this is for question 6
							$("#q6Other").hide();
							$("#q6Choice").on("change", function() {
								if ($(this).val() == "Other") {
									$("#q6Other").show();
								}
								else {
									$("#q6Other").hide();
								}
							});
						
						//this is for question 17
							$("#q17Other").hide();
							$("#q17Choice").on("change", function() {
								if ($(this).val() == "Other") {
									$("#q17Other").show();
								}
								else {
									$("#q17Other").hide();
								}
							});
					
		
						//if($('select option:selected').text() == "Other"){
							//$('html select').after("<label>Enter your alternative<input></input></label>");
						//}
						//else{
							//$('label').remove();
						//}
					//});
		};
	