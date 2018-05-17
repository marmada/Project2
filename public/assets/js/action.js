

$(function() {

  // function 1 to grabs "search" for user and GET Nutrition data

  $('#search').on('submit', function(event) {
    event.preventDefault();

    var query = $('#search').val().trim();
    var apiKey = process.env.APIKEY;

    //var apikey = "R8gYygJ9lQqhfgowOnDP2afcsq5YM7tRNp7cPqTl";

    console.log(apikey);

    var queryURL =
      'https://api.nal.usda.gov/ndb/search/?format=json&sort=r&max=10&offset=0&api_key=' +
      apikey +
      '&q=';
    var search = queryURL + query;
    console.log(queryURL + query);

    $.ajax({
      url: search,
      method: 'GET',
    }).then(function(response) {
      console.log(response);

      var items = JSON.parse(response.list.item);

      //For Loop to run 10 images through API Object
      for (var i = 0; i < items.length; i++) {
        //Setting Div to hold Image & Rating
        var foodchoices = $("<div class='newDiv'>");

        var food = items[i].name;
        var id = items[i].ndbno;
      }
    });
  });

  // Ajax to grab information from user login input for validation

  $('#loginS').on("click", function(event) {

    event.preventDefault();

    // get the form data & validate is not "blank"
  
      var loginData = {
        user: $('#email').val().trim(),
        password: $('#password').val().trim()
      };
      console.log(loginData);

      if (loginData.user != '' && loginData.password != '') {

      // process the form
      $.ajax('/login', {
        type: 'POST',
        data: loginData,
      }).done(function() {
        console.log('info to route for validation succesful');
      });
    } else {
      msg = 'Invalid username and password!';

      $('#message').html(msg);
    }
  });
  
});
