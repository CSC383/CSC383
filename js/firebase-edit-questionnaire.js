const auth = firebase.auth();
const btnLogout = document.getElementById('btnLogout');

//Add logout event
btnLogout.addEventListener('click', function(e) {
	auth.signOut();
  console.log(e.message);
});

//Add a realtime listener
auth.onAuthStateChanged(function(firebaseUser) {
	if(firebaseUser) {
		console.log(firebaseUser);
		btnLogout.classList.remove('hide');
    console.log(firebaseUser.email);
    closeModal();
	} else {
		console.log('not logged in');
    showModal();
		btnLogout.classList.add('hide');
	}
});

function closeModal() {
  $('#myModal').modal('close');
};

function showModal(){
  $('#myModal').modal('show');
};


(function editquestionnaire(){
  //sets spot in database where to look for keys
  var keyref = firebase.database().ref('questions');
  keyref.once('value', function(snapshot) {
      var keysArray = [];
      //invokes this function for each key in database reference spot
      snapshot.forEach(function(childSnapshot) {
        //finds the keys and pushes them to an array
        var key = childSnapshot.key;
        var childData = key;
        //pushes keyvalues into the keys array
        keysArray.push(childData);
      })
      createDocument(keysArray);


  })
})();


function createDocument(keysArray){
  var intro = document.getElementById('intro');

  var container = document.createElement('div');
  container.setAttribute('class', "container");
  intro.after(container);

      var row = document.createElement('div');
      row.setAttribute('class', "row");
      container.appendChild(row);

        var bootstrap = document.createElement('div');
        bootstrap.setAttribute('class',"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1");
        row.appendChild(bootstrap);

          var bootstrapRow = document.createElement('div');
          bootstrapRow.setAttribute('class',"row");
          bootstrap.appendChild(bootstrapRow);

            var formBootStrap = document.createElement('div');
            formBootStrap.setAttribute('class',"col-md-6 col-md-pull-2")
            bootstrapRow.appendChild(formBootStrap);

                var heading = document.createElement('h2');
                heading.setAttribute('class',"section-heading");
                var text = document.createTextNode("Add Question");
                formBootStrap.appendChild(heading);
                heading.appendChild(text);

                var questionForm = document.createElement('form');
                questionForm.setAttribute('class',"contact-form");
                formBootStrap.appendChild(questionForm);

                var formControl = document.createElement('div');
                formControl.setAttribute('class', "controls");
                formBootStrap.appendChild(formControl);

                  var formRow = document.createElement('div');
                  formRow.setAttribute('class',"row");
                  formControl.appendChild(formRow);

                    var checkboxContainer = document.createElement('div');
                    checkboxContainer.setAttribute('class', "col-md-6");
                    formRow.appendChild(checkboxContainer);

                      var checkboxForm = document.createElement('div');
                      checkboxForm.setAttribute('class', "form-group");
                      checkboxContainer.appendChild(checkboxForm);

                          var type = document.createElement('h5');
                          var typeText = document.createTextNode("Question Type");
                          checkboxForm.appendChild(type);
                          type.appendChild(typeText);

                          var radioChecked;
                          var radio1Pos = document.createElement('div');
                          checkboxForm.appendChild(radio1Pos);

                              var radio1 = document.createElement('input');
                              radio1.setAttribute('type', 'radio');
                              radio1.setAttribute('id', "mi");
                              radio1.setAttribute('name',"option");
                              radio1.onclick = function(){
                                if(radioChecked == this){
                                  this.checked = false;
                                  radioChecked = null;
                                }else{
                                  radioChecked = this;
                                }
                              }
                              radio1Pos.appendChild(radio1);
                              var radio1label = document.createElement('LABEL');
                              radio1.after(radio1label);
                              var text = document.createTextNode("Manual input");
                              radio1label.appendChild(text);

                          var radio2Pos = document.createElement('div');
                          checkboxForm.appendChild(radio2Pos);

                              var radio2 = document.createElement('input');
                              radio2.setAttribute('type', 'radio');
                              radio2.setAttribute('id', "mc");
                              radio2.setAttribute('name',"option");
                              radio2.onclick = function(){
                                if(radioChecked == this){
                                  this.checked = false;
                                  radioChecked = null;
                                }else{
                                  radioChecked = this;
                                }
                              }
                              radio2Pos.appendChild(radio2);
                              var radio2label = document.createElement('LABEL');
                              radio2.after(radio2label);
                              var text = document.createTextNode("Multiple Choice");
                              radio2label.appendChild(text);

                          var radio3Pos = document.createElement('div');
                          checkboxForm.appendChild(radio3Pos);

                              var radio3 = document.createElement('input');
                              radio3.setAttribute('type', 'radio');
                              radio3.setAttribute('id', "sc");
                              radio3.setAttribute('name',"option");
                              radio3.onclick = function(){
                                if(radioChecked == this){
                                  this.checked = false;
                                  radioChecked = null;
                                }else{
                                  radioChecked = this;
                                }
                              }
                              radio3Pos.appendChild(radio3);
                              var radio3label = document.createElement('LABEL');
                              radio3.after(radio3label);
                              var text = document.createTextNode("Single Choice");
                              radio3label.appendChild(text);

                              var optionInput = document.createElement('h5');
                              var optionText = document.createTextNode("Please press the button to add a option");
                              checkboxForm.appendChild(optionInput);
                              optionInput.appendChild(optionText);

                              var optionButton = document.createElement('input');
                              optionButton.setAttribute('class', "btn btn-success btn-send");
                              optionButton.setAttribute('type',"submit");
                              optionButton.setAttribute('value', "Add");
                              optionButton.style.display = "inline-block";
                              optionButton.onclick = function createOption(){
                                var optionBox = document.createElement('input');
                                optionBox.setAttribute('type', "text");
                                optionBox.style.width = "300px"
                                optionBox.style.marginBottom = "2px";
                                optionBox.style.marginTop = "1px";
                                optionBox.style.marginRight = "1px";
				optionBox.style.display = "table";


                                var deleteOption = document.createElement('submit');
                                deleteOption.setAttribute('class', "btn btn-success btn-send");
				deleteOption.style.width = "100px";
                                deleteOption.style.height = "35px";
                                deleteOption.innerText = "Delete";
                                deleteOption.style.display = "table";
                                deleteOption.style.display = "inline-block";
                                deleteOption.onclick = function deleteOption(){
                                  this.previousSibling.remove();
                                  this.remove();
                                }

                                questionCreatorForm.appendChild(optionBox);
                                optionBox.after(deleteOption);
                              }
                              checkboxForm.appendChild(optionButton);



                          var helpBox = document.createElement('div');
                          checkboxForm.appendChild(helpBox);

                              var helpText = document.createElement('p');
                              var text = document.createTextNode("* if you add an other option a box for user input will be added");
                              helpBox.appendChild(helpText);
                              helpText.appendChild(text);

                          var applyBox = document.createElement('input');
                          applyBox.setAttribute('class', "btn btn-success btn-send");
                          applyBox.setAttribute('type',"button");
                          applyBox.setAttribute('value',"Add Question");
                          checkboxForm.appendChild(applyBox);
                          applyBox.onclick = function addToDatabase(){
                            var inputs = document.getElementById('inputs').getElementsByTagName('input');
                            var textarea = document.getElementById('inputs').getElementsByTagName('TEXTAREA');

                            var dbQuestion = inputs[0].value;
                            var dbHelp = textarea[0].value;
                            var types = document.getElementsByName('option');
                            if (types[0].checked){
                              var dbtype = "manual";
                            }
                            else if (types[1].checked){
                              var dbtype = "multiple choice";
                            }
                            else if (types[2].checked){
                              var dbtype = "single choice";
                            }
                            var dbref = firebase.database().ref('questions');
                            dbref.push({"question": dbQuestion, "help": dbHelp, "option1": dbtype});

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
                                for (i=1;i<inputs.length;i++){
                                  var objectName = "option" + (i+1);
                                  var key = keys[keys.length-1];
                                  var newdbref = firebase.database().ref('questions').child(key);
                                  var objectData = {[objectName]: inputs[i].value};
                                  newdbref.update(objectData);
                                  }
                            });


                          }

                    var questionCreator = document.createElement('div');
                    questionCreator.setAttribute('class','col-md-6');
                    questionCreator.setAttribute('id', "inputs");
                    formRow.appendChild(questionCreator);

                      var questionCreatorForm = document.createElement('div');
                      questionCreatorForm.setAttribute('class', 'form-group');
                      questionCreator.appendChild(questionCreatorForm);

                          var questionInput = document.createElement('h5');
                          var questionText = document.createTextNode("Write your question below.");
                          questionCreatorForm.appendChild(questionInput);
                          questionInput.appendChild(questionText);

                          var inputBox = document.createElement('input');
                          inputBox.setAttribute('type', "text");
                          inputBox.style.width = "300px";
                          questionCreatorForm.appendChild(inputBox);

                          var helpArea = document.createElement('h5');
                          var helpTextArea = document.createTextNode("Write question description below");
                          questionCreatorForm.appendChild(helpArea);
                          helpArea.appendChild(helpTextArea);

                          var areaBox = document.createElement('TEXTAREA');
                          questionCreatorForm.appendChild(areaBox);
	
			  var optionArea = document.createElement('h5');
			  var optionTextArea = document.createTextNode("Options");
			  questionCreatorForm.appendChild(optionArea);
			  optionArea.appendChild(optionTextArea);




//THE NEXT PART IS WHERE WE EDIT QUESTIONS!!
//////////////////////////////////////////////////////////////////////////////////////////////



                          var NewformBootStrap = document.createElement('div');
                          NewformBootStrap.setAttribute('class',"col-md-6")
                          bootstrapRow.appendChild(NewformBootStrap);

                              var Newheading = document.createElement('h2');
                              Newheading.setAttribute('class',"section-heading");
                              var text = document.createTextNode("Edit Question");
                              NewformBootStrap.appendChild(Newheading);
                              Newheading.appendChild(text);

                              var NewquestionForm = document.createElement('form');
                              NewquestionForm.setAttribute('class',"contact-form");
                              NewformBootStrap.appendChild(NewquestionForm);

                              var NewformControl = document.createElement('div');
                              NewformControl.setAttribute('class', "controls");
                              NewformBootStrap.appendChild(NewformControl);

                                var NewformRow = document.createElement('div');
                                NewformRow.setAttribute('class',"row");
                                NewformControl.appendChild(NewformRow);

                                  var NewcheckboxContainer = document.createElement('div');
                                  NewcheckboxContainer.setAttribute('class', "col-md-6");
                                  NewformRow.appendChild(NewcheckboxContainer);

                                    var NewcheckboxForm = document.createElement('div');
                                    NewcheckboxForm.setAttribute('class', "form-group");
                                    NewcheckboxContainer.appendChild(NewcheckboxForm);

                                      var select = document.createElement('h5');
                                      var selectText = document.createTextNode("Select Question");
                                      NewcheckboxForm.appendChild(select);
                                      select.appendChild(selectText);

                                      var selection = document.createElement('select');
                                      selection.setAttribute('id', "mySelect")
                                      selection.style.width = "100px";
                                      NewcheckboxForm.appendChild(selection);
                                      var blankOption = document.createElement('option');
                                      var blankText = document.createTextNode(' ');
                                      selection.appendChild(blankOption);
                                      blankOption.appendChild(blankText);
                                      selection.onchange = function getAndRemoveData(){
                                        var editQuestion = selection.value;
                                        editQuestion = editQuestion.replace('question','');
                                        editQuestion = parseInt(editQuestion) - 1;

                                        var removeOption = document.getElementById('questionData');
                                        var removeElement = removeOption.getElementsByClassName("removable");
                                        while (removeElement[0]){removeElement[0].parentNode.removeChild(removeElement[0]);}

                                        var removeElement = removeOption.getElementsByClassName("btn btn-success btn");
                                        while (removeElement[0]){removeElement[0].parentNode.removeChild(removeElement[0]);}





                                        dbref = firebase.database().ref('questions').child(keysArray[editQuestion]);
                                        dbref.once('value', function fillForm(snapshot){
                                          var keyData = snapshot.val();
                                          var questionDataInputs = document.getElementById('questionData').getElementsByTagName('input');
                                          for(i=1;i<questionDataInputs;i++){
                                            questionDataInputs[i].remove();
                                          }
                                          var questionDataTEXTAREA = document.getElementById('questionData').getElementsByTagName('TEXTAREA');
                                          questionDataInputs[0].value = keyData.question;
                                          questionDataTEXTAREA[0].value = keyData.help;
                                          if (keyData.option1 == "manual"){
                                            var manualInput = document.getElementById("mi2");
                                            manualInput.checked = true;
                                          }
                                          else if (keyData.option1 == "multiple choice") {
                                            var mc = document.getElementById("mc2");
                                            mc.checked = true;
                                          }
                                          else if (keyData.option1 == "single choice"){
                                            var sc = document.getElementById("sc2");
                                            sc.checked = true;
                                          }

                                          delete keyData.help;
                                          delete keyData.question;
                                          delete keyData.option1;





                                          var dataArray = $.map(keyData, function(value, index) {
                                              return [value];
                                          })




                                          for(i=0;i<dataArray.length;i++){
                                            var newDataOption = document.createElement('input');
                                            newDataOption.setAttribute('type', "text");
                                            newDataOption.setAttribute('class', "removable");
                                            newDataOption.style.width = "300px";
                                            newDataOption.style.marginBottom = "2px";
                                            newDataOption.style.marginTop = "1px";
                                            newDataOption.setAttribute('id',"option"+(i+2));
                                            NewquestionCreatorForm.appendChild(newDataOption);
                                            newDataOption.value = dataArray[i];

                                            var deleteOption = document.createElement('input');
                                            deleteOption.setAttribute('class', "btn btn-success btn");
                                            deleteOption.setAttribute('name', "removable");
                                            deleteOption.setAttribute('type',"submit");
                                            deleteOption.setAttribute('value', "delete option");
                                            deleteOption.style.display = "inline-block";
                                            deleteOption.onclick = function deleteOption(){
                                              var lastElement = this.previousSibling.getAttribute('id');
                                              var optionRef = firebase.database().ref('questions').child(keysArray[editQuestion]).child(lastElement);

                                              optionRef.remove();
                                              this.previousSibling.remove();
                                              this.remove();
                                            }
                                            NewquestionCreatorForm.appendChild(deleteOption);
                                          }


                                        })
                                      }

                                        var optionArray = [];
                                        for(i=0;i<keysArray.length;i++){
                                          var selectOption = document.createElement('option');
                                          var selectOptionText = document.createTextNode("question"+ (i+1));
                                          optionArray.push(selectOptionText);
                                          selection.appendChild(selectOption);
                                          selectOption.appendChild(selectOptionText);
                                        }

                                        var Newtype = document.createElement('h5');
                                        var typeText = document.createTextNode("Question Type");
                                        NewcheckboxForm.appendChild(Newtype);
                                        Newtype.appendChild(typeText);

                                        var NewradioChecked;
                                        var Newradio1Pos = document.createElement('div');
                                        NewcheckboxForm.appendChild(Newradio1Pos);

                                            var Newradio1 = document.createElement('input');
                                            Newradio1.setAttribute('type', 'radio');
                                            Newradio1.setAttribute('id', "mi2");
                                            Newradio1.setAttribute('name',"questionOption");
                                            Newradio1.onclick = function(){
                                              if(NewradioChecked == this){
                                                this.checked = false;
                                                NewradioChecked = null;
                                              }else{
                                                NewradioChecked = this;
                                              }
                                            }
                                            Newradio1Pos.appendChild(Newradio1);
                                            var Newradio1label = document.createElement('LABEL');
                                            Newradio1.after(Newradio1label);
                                            var text = document.createTextNode("Manual input");
                                            Newradio1label.appendChild(text);

                                        var Newradio2Pos = document.createElement('div');
                                        NewcheckboxForm.appendChild(Newradio2Pos);

                                            var Newradio2 = document.createElement('input');
                                            Newradio2.setAttribute('type', 'radio');
                                            Newradio2.setAttribute('id', "mc2");
                                            Newradio2.setAttribute('name',"questionOption");
                                            Newradio2.onclick = function(){
                                              if(NewradioChecked == this){
                                                this.checked = false;
                                                NewradioChecked = null;
                                              }else{
                                                NewradioChecked = this;
                                              }
                                            }
                                            Newradio2Pos.appendChild(Newradio2);
                                            var Newradio2label = document.createElement('LABEL');
                                            Newradio2.after(Newradio2label);
                                            var text = document.createTextNode("Multiple Choice");
                                            Newradio2label.appendChild(text);

                                        var Newradio3Pos = document.createElement('div');
                                        NewcheckboxForm.appendChild(Newradio3Pos);

                                            var Newradio3 = document.createElement('input');
                                            Newradio3.setAttribute('type', 'radio');
                                            Newradio3.setAttribute('id', "sc2");
                                            Newradio3.setAttribute('name',"questionOption");
                                            Newradio3.onclick = function(){
                                              if(NewradioChecked == this){
                                                this.checked = false;
                                                NewradioChecked = null;
                                              }else{
                                                NewradioChecked = this;
                                              }
                                            }
                                            Newradio3Pos.appendChild(Newradio3);
                                            var Newradio3label = document.createElement('LABEL');
                                            Newradio3.after(Newradio3label);
                                            var text = document.createTextNode("Single Choice");
                                            Newradio3label.appendChild(text);

                                            var NewoptionInput = document.createElement('h5');
                                            var NewoptionText = document.createTextNode("Please press the button to add a option");
                                            NewcheckboxForm.appendChild(NewoptionInput);
                                            NewoptionInput.appendChild(NewoptionText);

                                            var NewoptionButton = document.createElement('input');
                                            NewoptionButton.setAttribute('class', "btn btn-success btn-send")
                                            NewoptionButton.setAttribute('type',"submit");
                                            NewoptionButton.setAttribute('value', "Add");
                                            NewoptionButton.onclick = function createOption(){
                                              var NewoptionBox = document.createElement('input');
                                              NewoptionBox.setAttribute('type', "text");
                                              NewoptionBox.setAttribute('class',"removable");
                                              NewoptionBox.style.marginBottom = "2px";
                                              NewoptionBox.style.marginTop = "1px";
                                              NewoptionBox.style.marginRight = "3px";
                                              NewoptionBox.style.width = "300px";


                                              var deleteOption = document.createElement('input');
                                              deleteOption.setAttribute('class', "btn btn-success btn-send");
                                              deleteOption.setAttribute('type',"submit");
                                              deleteOption.setAttribute('name', "removable");
                                              deleteOption.setAttribute('value', "delete option");
                                              deleteOption.style.display = "inline-block";
                                              deleteOption.onclick = function deleteOption(){
                                                this.previousSibling.remove();
                                                this.remove();
                                              }


                                              NewquestionCreatorForm.appendChild(NewoptionBox);
                                              NewoptionBox.after(deleteOption);
                                            }
                                            NewcheckboxForm.appendChild(NewoptionButton);

                                        var NewhelpBox = document.createElement('div');
                                        NewcheckboxForm.appendChild(NewhelpBox);

                                            var NewhelpText = document.createElement('p');
                                            var text = document.createTextNode("* if you add an other option a box for user \n input will be added");
                                            NewhelpBox.appendChild(NewhelpText);
                                            NewhelpText.appendChild(text);

                                        var deleteQuestionBox = document.createElement('input');
                                        deleteQuestionBox.setAttribute('class', "btn btn-success btn-send");
                                        deleteQuestionBox.setAttribute('type',"button");
                                        deleteQuestionBox.setAttribute('value',"Delete Question");
                                        deleteQuestionBox.style.marginBottom = "1px";
                                        NewcheckboxForm.appendChild(deleteQuestionBox);
                                        deleteQuestionBox.onclick = function removeQuestion(){



                                          var inputs = document.getElementById('data').querySelectorAll("input[type=text]");
                                          var textarea = document.getElementById('data').getElementsByTagName('TEXTAREA');

                                          inputs[0].value = " ";
                                          textarea[0].value = " ";
                                          inputs = inputs - inputs[0];
                                          for(i=0;i<inputs.length;i++){
                                            inputs[i].remove();

                                          }


                                          var neweditQuestion = document.getElementById('mySelect');
                                          neweditQuestion = neweditQuestion.options[neweditQuestion.selectedIndex].value;
                                          neweditQuestion = neweditQuestion.replace('question','');
                                          neweditQuestion = parseInt(neweditQuestion) - 1;

                                          var deleteRef = firebase.database().ref('questions').child(keysArray[neweditQuestion]).remove();

                                          var removeSelect = document.getElementById('mySelect');
                                          removeSelect.remove(removeSelect.selectedIndex);

                                          var removeOption = document.getElementById('questionData');
                                          var removeElement = removeOption.getElementsByClassName("removable");
                                          while (removeElement[0]){removeElement[0].parentNode.removeChild(removeElement[0]);}

                                          var removeElement = removeOption.getElementsByClassName("btn btn-success btn");
                                          while (removeElement[0]){removeElement[0].parentNode.removeChild(removeElement[0]);}

                                        }
                                        var applyBox = document.createElement('input');
                                            applyBox.setAttribute('class', "btn btn-success btn-send");
                                            applyBox.setAttribute('type',"button");
                                            applyBox.setAttribute('value',"Apply");
                                            NewcheckboxForm.appendChild(applyBox);
                                            applyBox.onclick = function addToDatabase(){
                                              var inputs = document.getElementById('data').querySelectorAll("input[type=text]");
                                              var textarea = document.getElementById('data').getElementsByTagName('TEXTAREA');

                                              var dbQuestion = inputs[0].value;
                                              var dbHelp = textarea[0].value;
                                              var types = document.getElementsByName('questionOption');
                                              if (types[0].checked){
                                                var dbtype = "manual";
                                              }
                                              else if (types[1].checked){
                                                var dbtype = "multiple choice";
                                              }
                                              else if (types[2].checked){
                                                var dbtype = "single choice";
                                              }

                                              var editQuestion = selection.value;
                                              editQuestion = editQuestion.replace('question','');
                                              editQuestion = parseInt(editQuestion) - 1;

                                              var dbref = firebase.database().ref('questions').child(keysArray[editQuestion]);
                                              dbref.update({"question": dbQuestion, "help": dbHelp, "option1": dbtype});

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
                                                  for (i=1;i<inputs.length;i++){
                                                    var objectName = "option" + (i+1);
                                                    var key = keys[keys.length-1];
                                                    var newdbref = firebase.database().ref('questions').child(keysArray[editQuestion]);
                                                    var objectData = {[objectName]: inputs[i].value};
                                                    newdbref.update(objectData);
                                                    }
                                              });


                                            }

                                  var NewquestionCreator = document.createElement('div');
                                  NewquestionCreator.setAttribute('class','col-md-6');
                                  NewquestionCreator.setAttribute('id','data');
                                  NewformRow.appendChild(NewquestionCreator);

                                    var NewquestionCreatorForm = document.createElement('div');
                                    NewquestionCreatorForm.setAttribute('class', 'form-group');
                                    NewquestionCreatorForm.setAttribute('id', 'questionData');
                                    NewquestionCreator.appendChild(NewquestionCreatorForm);

                                        var NewquestionInput = document.createElement('h5');
                                        var NewquestionText = document.createTextNode("Write your question below.");
                                        NewquestionCreatorForm.appendChild(NewquestionInput);
                                        NewquestionInput.appendChild(NewquestionText);

                                        var NewinputBox = document.createElement('input');
                                        NewinputBox.setAttribute('type', "text");
                                        NewinputBox.style.width = "300px";
                                        NewquestionCreatorForm.appendChild(NewinputBox);

                                        var NewhelpArea = document.createElement('h5');
                                        var NewhelpTextArea = document.createTextNode("Write question description below");
                                        NewquestionCreatorForm.appendChild(NewhelpArea);
                                        NewhelpArea.appendChild(NewhelpTextArea);

                                        var NewareaBox = document.createElement('TEXTAREA');
                                        NewquestionCreatorForm.appendChild(NewareaBox);
	
					var NewoptionArea = document.createElement('h5');
			  		var NewoptionTextArea = document.createTextNode("Options");
			  		NewquestionCreatorForm.appendChild(NewoptionArea);
			  		NewoptionArea.appendChild(NewoptionTextArea);






}
