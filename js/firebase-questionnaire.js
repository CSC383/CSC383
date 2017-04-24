

//Function to add provided questions to database
(function createquestions(){
	var question1 = {
		question: "What is your zip code?",
		option1: "manual",
		help: `UM-Flint’s EDA University Center is housed in downtown Flint but we
serve clients in all 7 counties in the I-69 Thumb Region including
Genesee, Huron, Lapeer, Sanilac, Shiawassee, St. Clair and Tuscola
counties.

As one of ten Michigan regions, the I-69 Thumb region boasts a
population of over 860,000 residents and a workforce of more than
395,000. Nine percent of the state’s population and over eight percent of
the state’s workforce live and work in the region.

Visit http://i-69thumbregion.org for more information on the region.`

	};

	var question2 = {
		question: "Are you an alumni of the University of Michigan Flint?",
		option1: "single choice",
		option2: "Yes",
		option3: "No",
		help: `If you graduated from UM-Flint within the last year, you are eligible for
additional assistance such as potential shared office space or School of
Management professor mentorship.`
	};

	var question3 = {
		question: "What is the name of your business?",
		option1: "manual",
		help: `If your business is an LLC, it must include in its business name the
words Limited, Limited Liability or LLC. For example, Nic’s Bagel
Emporium LLC or Nic’s Fantastic Fashions Limited becomes the
official legal name that my business registers with the state of
Michigan.

The name also may not contain a word or phrase indicating it is
organized for a purpose other than is stated in the Articles of
Organization.

A limited liability company name may not include the words
"corporation", "incorporated" or the abbreviations "corp." or
"inc.".

Visit http://www.michigan.gov/lara/0,4601,7-154-61343_35413_35429-120095--,00.html
for more information on these requirements.`
	};

	var question4 = {
		question: "What stage is your business in?",
		option1: "single choice",
		option2: "Idea",
		option3: "Startup",
		option4: "Established",
		option5: "Not sure",
		help: `Idea stage means the business is not yet in operation but you have
a good sense of what your product or service is and how you
imagine the business will run.

Startup stage means the business has been in operation and may
or may not have made some sales. Startup businesses are typically
less than two years old.

Established stage means the business has been in operation for
two or more years.

Not Sure? That’s okay too! We are here to help.`

	};
	var question5 = {
		question: "What type of business do you have?",
		option1: "single choice",
		option2: "Not for profit",
		option3: "For profit",
		option4: "Hybrid",
		option5: "Not sure",
		help: `Not For Profit means
For Profit means the business has been
Hybrid means the business

Not Sure? That’s okay too! We are here to help.`

	};

	var question6 = {
		question: "What is the legal entity of your business?",
		option1: "single choice",
		option2: "Other",
		option3: "Sole Prorietorship",
		option4: "S-Corporation",
		option5: "Corporation",
		option6: "L3C",
		option7: "LLC",
		option8: "Partnership",
		help: `Sole Proprietorship: A sole proprietorship is the most
basic type of business to establish. You alone own the company and
are responsible for its assets and liabilities. Learn more about the sole
proprietor structure.

S Corporation: An S corporation is similar to a C corporation but
you are taxed only on the personal level. Learn more about how S
corporations are structured.

Corporation: A corporation is more complex and generally
suggested for larger, established companies with multiple employees.
Learn more about how Corporations are structured.  

Limited Liability Company: An LLC is designed to provide the
limited liability features of a corporation and the tax efficiencies and
operational flexibility of a partnership. Learn more about how LLCs are
structured.

Partnership: There are several different types of
partnerships, which depend on the nature of the arrangement and
partner responsibility for the business. Learn more about how these
are structured.

Cooperative: People form cooperatives to meet a collective need
or to provide a service that benefits all member-owners. Learn more
about how cooperatives are structured.

Visit https://www.sba.gov/starting-business/choose-your-business-structure
for more information on basic legal structures.`

	};

	var question7 = {
		question: "What date did you start your business?",
		option1: "manual",
		help: `What is the date when your business was legally incorporated by the state of
Michigan according to your articles of organization filing? If you have not yet filed
your legal structure with the state of Michigan, you are by default a sole proprietor
and can list the date your sold your first product or service.`

	};

	var question8 = {
		question: "Do you conduct your business online?",
		option1: "single choice",
		option2: "Yes",
		option3: "No",
		help: `Do you conduct sales, marketing, consultations or other services through a main
website or social media channel?`

	};

	var question9 = {
		question: "Are you a home based business?",
		option1: "single choice",
		option2: "Yes",
		option3: "No",
		help: `Based on need, availability, and eligibility, clients may be offered additional services
such as a professional downtown mailing address.`

	};

	var question10 = {
		question: "For your recent full business year what was your: gross revenue/sales, profits, and losses?",
		option1: "manual",
		option2: "Revenue/Sales",
		option3: "Profits",
		option4: "Losses",
		help: `Gross revenue is the amount the company gets paid for selling its products or services.
Profit and loss can be determined by taking the Gross Revenue and subtracting costs to produce the product or service.`

	};

	var question11 = {
		question: "How will your business or organization serve the community?",
		option1: "manual",
		help: "This question relates to whether or not your company is able to identify and fill community needs with its product or services. "

	};

	var question12 = {
		question: "What type of product(s) or service(s) do you provide?",
		option1: "manual",
		help: "What are the top one or two products or services you will be selling?"

	};

	var question13 = {
		question: "Who are your targeted audience/customers?",
		option1: "manual",
		help: `Be as specific as possible listing your major customer segments or groups.

“Everybody” is not going to be interested in your product or service.

Use 3 adjectives to describe each customer segment, for example:
Flint-based, Milennial mothers-
specifies a geographic-range, age-range and affinity group that may be
interested in your products or services.`

	};

	var question14 = {
		question: "How will you make profit or fund your work?",
		option1: "single choice",
		option2: "Donation",
		option3: "Personal Assets",
		option4: "Volunteer",
		option5: "Employment",
		option6: "Fundraising",
		option7: "Grant",
		option8: "Investor",
		option9: "Loan",
		option10: "Sales",
		option11: "Sponsorship",
		option12: "Partner",
		help: `Except in rare cases, grants are seldom available to For-Profit businesses.

Most investors are only interested in extremely profitable or scalable businesses, if
you are outside of high growth industries, consider other financing sources.

Personal assets include personal savings.`

	};

	var question15 = {
		question: "Who does your accounting and tax returns?",
		option1: "manual",
		help: `This question refers to who does your accounting and tax returns. If you do your
own books, list whether you use Quickbooks or other software to help you?`

	};

	var question16 = {
		question: "Which of the following does your business have?",
		option1: "multiple choice",
		option2: "Commercial Banking account",
		option3: "Doing Business as",
		option4: "Employer identification number",
		help: `Commercial banking account is a specific business account that is separate from
your personal banking account and is only used for business funds.

Doing Business As is a county designation, which allows sole propriaters to use a
business name to operate their personal ventures.

Employer Identification Number is a free identification number from the IRS.
Businesses need to file for an EIN after they establish the company.`

	};

	var question17 = {
		question: "Which Innovation Incubator services are of interest to you?",
		option1: "multiple choice",
		option2: "Other",
		option3: "Networking",
		option4: "Information",
		option5: "Web Access",
		option6: "Mentoring",
		option7: "Co-working Space",
		option8: "Meeting Space",
		option9: "Office Space",
		option10: "Mailing Address",
		option11: "Help on a business plan  or model",
		help: `Web Access is available through free WiFi access at the EDA University
Center’s downtown Flint location. There are no computers available so
clients must bring their own laptops and internet friendly dvices to
connect.

Co-working space is open to students and community members Monday
– Friday, 9 a.m. -5 p.m. It is available at no charge and provides clients
with a flexible work space in downtown Flint.

The office space has limited availability. Eligibility required.

The mailing address is located in a shared public space within the EDA
University Center’s downtown location.`

	};

	var question18 = {
		question: "What is your name?",
		option1: "manual"

	};

	var question19 = {
		question: "What phone number can we contact you at?",
		option1: "manual"

	};

	var question20 = {
		question: "What email can we contact you at?",
		option1: "manual"

	};

	var questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14, question15, question16, question17, question18, question19, question20];

	var fref = firebase.database().ref().child('questions');
	//push questions into database
	fref.on('value', function(snapshot){
		snap_val = snapshot.val();
		if (snap_val == null){

				var i = 0
				do{

					fref.push(questions[i]);
					i++;
				}
				while (i <= questions.length);
		}
	})
})();

//This function finds the keys for each child in the database




//TOM THIS IS WHAT YOU WANTTTTTTT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//The following code will create an array with all of the fields which have different address.
//So all you should have to do is loop through the array and each time you do you need to get the
//different values in the object fields
// function addAdressesToMap(){
	//var addresses = firebase.database().ref('your database reference').orderByKey();
	//addresses.once('value', snapshot){
		//var addressArray = new Array();
		//snapshot.forEach(function(childSnapshot){
		// var addr = childSnapshot.key;
		// var childData = key;
		//addressArray.push(childData);
		//})
	//}
//}

// lets say the following is in the database where addresses is the child where you are storing adresses and address1 is the first address object

// addresses
	//address1
		//address: myAdress


// than you do the following
// you would do var anaddress = firebase.database.ref('addresses').child(addresses[q]) assuming q is the loop variable
//and address1 is the first child in the address portion (as its would  be addresses[0]) it would set anaddress to equal address1
	//anaddress.once('value', function(snapshot){
		//var location = snapshot.val();
	// than you can do this var add = location.address and it sets its value to whats in that spot in this case myAdress

	//})


//ncuster@umflint.edu
(function questionnaire(){
	//sets spot in database where to look for keys
	var keyref = firebase.database().ref('questions').orderByKey();
	keyref.once('value', function(snapshot) {
			//creates keys array to hold the keys
			var keys = new Array();
			//invokes this function for each key in database reference spot
			snapshot.forEach(function(childSnapshot) {
				//finds the keys and pushes them to an array
				var key = childSnapshot.key;
				var childData = key;
				//pushes keyvalues into the keys array
				keys.push(childData);
			})
			//invoke function createquestion giving it the key array
			createquestion(keys);

	})

})();

//function that creates the html elements
//for each question
function createquestion(key){
	for (q = 0; q < key.length; q++){
		//sets variable to the database location which scales with q
		var dataref = firebase.database().ref('questions').child(key[q]);

		//fires a function of the value of dataref
		dataref.once('value', function(snapshot){

			var something = snapshot.val();

			var id = 'question' + (q+1) + ' ' + 'optional';
			//sets the value of dataref to q_val
			var q_val = snapshot.val();
			//assigns parent to equal the form element in Questionnaire.html
			var parent = document.getElementById('questionnaire');

			//var container = document.createElement('div');
			//container.setAttribute('class', 'container');
			//parent.appendChild(container);

			//var row = document.createElement('div');
			//row.setAttribute('class','row');
			//container.appendChild(row);

			//creates a div to be created, assigns it a class
			//and than puts it inside the form element
			var new_div = document.createElement('div');
			new_div.setAttribute('class', 'form-group');
			parent.appendChild(new_div);

			//creates a button for each question
			//that will open a new page to describe what
			//the question means
			var new_check = document.createElement('input');
			new_check.setAttribute('type', 'button');
			new_check.setAttribute('id', 'help');
			new_check.setAttribute('class', 'btn btn-info btn-lg');
			new_check.setAttribute('value', 'Help');
			new_check.setAttribute('data-toggle', "modal");
			new_check.setAttribute('data-target', "#myModal")
			new_check.style.cssFloat = "right";
			new_div.appendChild(new_check);
			new_check.onclick = function helpwindow(){
				var q_help = document.getElementById('q_help');
				q_help.innerText = q_val.help;
			}
					//var openPrint = window.open('popup.html','location=0,toolbar=0,menubar=0,Help Window');
			    //openPrint.onload = function() {
			        //var doc = openPrint.document;

			        //var newpre = document.createElement("pre");
			        //var newtext = document.createTextNode(q_val.help);
							//newpre.style.fontstyle = "Times New Roman"
			        //newpre.appendChild(newtext)
			        //doc.body.appendChild(newpre);

						//	var close = document.createElement("button");
					  //  var text = document.createTextNode("Close");
						//	close.appendChild(text);
						//	close.style.width = "50px";
						//	close.style.height = "25px";
						//	close.onclick = function(){
							//	openPrint.close();
						//	}
					//		newpre.after(close);
			  //  };
			//}

			//Creates the h2 element for the question to go into
			//sets h2's class to section-heading
			//places it inside the just created div
			//sets the h2's inner text to the question field in the database
			var qhead = document.createElement('h2');
			qhead.setAttribute('class', 'section-heading');
			new_div.appendChild(qhead);
			qhead.innerText = q_val.question;

			//creates a variable qual to the h2's innerText
			//than makes variable which will show the question text and answer:
			var h2 = qhead.innerText;
			var name = h2;

			//creates a new select element
			//assigns it a class and name
			//places it after newly created h2
			var new_select = document.createElement('select');
			new_select.setAttribute('class', 'form-control');
			new_select.setAttribute('name', name);
			new_select.style.marginBottom = "5px";
			new_select.required = "true";
			qhead.after(new_select);

			//creates a empty option value to place in the select so
			//so the select element starts blank
			var new_option = document.createElement('option');
			new_option.setAttribute('class', 'hidetext');
			new_select.appendChild(new_option);

			//creates a new database reference point
			var dataref = firebase.database().ref('questions').child(key[q]);
			//starts function off of this new reference
			dataref.once('value', function(snapshot){
				//creates an array to store the child names/keys of the reference point
				var options = new Array();
				//creates a function that fires for each value in the snapshot
				snapshot.forEach(function(childSnapshot){
					//create variable o_key and sets its value to the current key of the reference
					var o_key = childSnapshot.key;
					//sets new variable to equal o_key
					var childData = o_key;
					//pushes the key of the reference point into options array
					options.push(childData);
				})
				//filters the newly created array removing unwanted keys
				options = options.filter(notquestion);
				options = options.filter(nothelp);
				//creates a new refernce point pointed at the key inside questions
				//based on q's value example if q was one its the first child in questions
				//than sets the next directory to the first value in options array which is option1
				var o_ref = firebase.database().ref('questions').child(key[q]).child(options[0]);
				//starts function off of the value
				o_ref.once('value', function(snapshot){
					//sets variable o_val equal to the value of option1
					var o_val = snapshot.val();
					// I use the spot option1 as an identifier for the type of question it is
					//so if option1 equal manual than it does the following
					if (o_val == 'manual'){
						//first it removes the select we previously created because the user is typing in a response
						new_select.remove();
						//if the length of options is greater than 1 we know the user
						//needs to enter more than one piece of information therefore we need to describe the input fields
						if(options.length > 1){
							//creates loop equal to the length of options
							//starts i at one because option0 doesnt exist
							for(i=1;i<options.length;i++){
								//create a new firebase refence which will look at each indivual
								//option thanks to the loop
								var newref = firebase.database().ref('questions').child(key[q]).child(options[i]);
								//starts function based on value
								newref.once('value',function(snapshot){
									//sets variable newval to value of the database refernce
									newval = snapshot.val();
									//creates a new div, assigns it the text of the database reference
									//displays as inline-block and places it after the h2
									var new_div = document.createElement('div');
									var text = document.createTextNode(newval);
									new_div.appendChild(text);
									new_div.setAttribute('name', name);
									new_div.style.display = "inline-block";
									qhead.after(new_div);
									//creates new input field assigns it a name and type
									//displays it as table and places it after the new div
									var new_input = document.createElement('input');
									new_input.setAttribute('name', name);
									new_input.setAttribute('type', 'text');
									new_input.style.display = "table";
									new_input.required = "true";
									new_div.after(new_input);

								})
							}
							}
								//however if the length of options is one we know they only
								//need one response and therefore do not need to describe the input field
								else{
									var new_input = document.createElement('input');
									new_input.setAttribute('name', name)
									new_input.setAttribute('type', 'text');
									new_input.required = "true";
									qhead.after(new_input);
								}

						}
							//code for multiple
							else if(o_val == 'multiple choice'){
								new_select.remove();
								for(i=1;i<options.length;i++){
									var newref = firebase.database().ref('questions').child(key[q]).child(options[i]);
									newref.once('value',function(snapshot){
										newval = snapshot.val();

										var new_div = document.createElement('div');
										new_div.setAttribute('id', 'container');
										new_div.style.display = "table";
										qhead.after(new_div);
										var new_check = document.createElement('input');
										new_check.setAttribute('type', 'checkbox');
										new_check.setAttribute('name', name);
										new_check.setAttribute('value', newval);
										new_div.appendChild(new_check);
										var new_label = document.createElement('LABEL');
										new_check.after(new_label);
										var text = document.createTextNode(newval);
										new_label.appendChild(text);
									})
								}
								for(i=0;i<options.length;i++){
									var newref = firebase.database().ref('questions').child(key[q]).child(options[i]);
									newref.once('value',function(snapshot){
										newval = snapshot.val();
										if((newval == "Other")||(newval == "other")){
											otherchoice(name, new_div, id);
										}
									})

								}
							}
							// if option1 equals other we know that the list of drop downs has an option
							//saying other which means they should input their own option
							else if(o_val =='single choice'){
								new_select.remove();
								//create a for loop to create all option elements
								for(i=1;i<options.length;i++){
									var newref = firebase.database().ref('questions').child(key[q]).child(options[i]);
									newref.once('value',function(snapshot){
										newval = snapshot.val();

										var new_div = document.createElement('div');
										new_div.setAttribute('id', 'container');
										new_div.style.display = "table";
										qhead.after(new_div);
										var new_check = document.createElement('input');
										new_check.setAttribute('type', 'radio');
										new_check.setAttribute('name', name);
										new_check.setAttribute('value', newval);
										new_div.appendChild(new_check);
										var new_label = document.createElement('LABEL');
										new_check.after(new_label);
										var text = document.createTextNode(newval);
										new_label.appendChild(text);
								})
								}
							//invokes other choice function to create the user input box
								for(i=0;i<options.length;i++){
									var newref = firebase.database().ref('questions').child(key[q]).child(options[i]);
									newref.once('value',function(snapshot){
										newval = snapshot.val();
										if((newval == "Other")||(newval == "other")){
											otherchoice(name, new_div, id);
										}
									})
								}
							}

					})


			})
			//looks to see if we are at the end of the loop
			//does this by looking to see if q+1 equals the length of key
			//in otherwords if all the questions have been loaded
			if((q+1) ==key.length){
				//invokes submit button function which creates a submit button
				submitbutton(parent);
			}


		})

	}
}

//This function controls the creation of the user input
function otherchoice(name, new_select, id){

	//creates div to describe the box
	var new_div = document.createElement('div');
	var text = document.createTextNode("Enter your choice: ");
	new_div.appendChild(text);
	new_div.style.display = "inline-block";
	new_select.appendChild(new_div);

	//creates input box
	var manual = document.createElement('input');
	manual.setAttribute('type', 'text');
	manual.setAttribute('name', name);
	manual.style.display = "inline-block";
	new_div.after(manual);

}

//this function creates the button element
function submitbutton(parent){
	//creates div for button to go inside
	var div = document.createElement('div');
	div.setAttribute('class', 'col-md-12');
	parent.appendChild(div);
	//creates button assigns it type class and value, adds margin appends it to the div
	var btn = document.createElement('input');
	btn.setAttribute('type', 'submit');
	btn.setAttribute('class', 'btn btn-success btn-send');
	btn.setAttribute('value', 'Submit');
	btn.style.marginTop = "5px";
	div.appendChild(btn);

}

//this function has functionality to filter the unwanted childs in a key
function notquestion(question){
	return question != 'question';
}

//this function has functionality to filter the unwanted childs in a key
function nothelp(help){
	return help != 'help';
}
