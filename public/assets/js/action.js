
require ('dotenv').config ();

$(function() {
  $("#search").on("submit", function(event) {
    event.preventDefault();
    
    var id = $(this).data("id");
    var newSleep = $(this).data("newsleep");

    var newSleepState = {
      sleepy: newSleep
    };


var query= 'hersheys';
//var apiKey = process.env.APIKEY;
var apikey = "R8gYygJ9lQqhfgowOnDP2afcsq5YM7tRNp7cPqTl";

console.log(apikey);


var queryURL = "https://api.nal.usda.gov/ndb/search/?format=json&sort=r&max=10&offset=0&api_key=" + apikey + "&q=";

console.log(queryURL+query);

function searchFood(){

  $.ajax({
    url: queryURL+query,
    method: "GET"
    }).then(function(response) {   

      console.log(response);
     // var data = JSON.parse(response);

      console.log(response.data);
  
});
};

  });
});

