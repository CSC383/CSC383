function printReviews(input)
{
  var resourceRef = rootref.child("Resources");
  var inputClean = decodeURIComponent(input); 


  resourceRef.orderByChild("name").equalTo(inputClean).on("child_added", function(snap)
  {
    snap.child("reviews").forEach(function(shot)
    {     
      var user = shot.child("user").val();
      var rating = shot.child("rating").val();
      var rBody = shot.child("text").val();

      $("#modal_body").append("<tr><td>" + user + "</td><td>" + rating + "</td></tr><tr><td>" + rBody+ "</td></tr>");
    });
  },
  function(error)
  {
    $("#modal_body").append("<tr><td>Sorry! No one has reviewed this content! Be the first!</td></tr>")
  });
}

function makeReivew(input)
{
  var rBody = document.getElementById("rMaker");
  var score = document.getElementById("rater");
  var userID = document.getElementById("username");
  var inputClean = decodeApos(input);

  rootref.child("Resources").orderByChild("name").equalTo(inputClean).on("child_added", function(snap)
  {
    var pushRef = snap.child("reviews").push().set(
      {
      user: "" + userID.value + "",
      rating: "" + score.value + "",
      text: "" + rBody.value + ""
      });
  }
}

function getAggregateRating(input)
{
  var i = 0;
  var j = 0;
  rootref.child("Resources").orderByChild("name").equalTo(input).once("child_added", function(snap)
  {
    snap.child("reviews").forEach(function(shot)
    {
      j = j + shot.child("rating").val();
      i++;
      
    }
  }

  var rating = j/i;
  

}
