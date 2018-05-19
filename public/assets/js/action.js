

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

      //For Loop to add 10 objects to dropdown menu
      for (var i = 0; i < items.length; i++) {
        //Setting Div to hold Image & Rating
        var foodchoices = $("<div class='newDiv'>");

        var food = items[i].name;
        var id = items[i].ndbno;
      }
    });
  });

  // Ajax to grab information from user login input for validation

  $('#register').on("click", function(event) {

    event.preventDefault();

    // get the form data & validate is not "blank"
  
      var registerData = {
        user: $('#email-2').val().trim(),
        password: $('#password-2').val().trim(),
        nickname: $('#nickname').val().trim(),
        name: $('#name').val().trim(),
        lastname: $('#lastname').val().trim(),
        weight: $('#weight').val().trim(),
        height: parseInt($('#height-ft').val())*12+parseInt($("#height-in"))
      };
      console.log(loginData);

      if (registerData.user != '' && registerData.password != '' && registerData.nickname!='') {

      // process the form
      $.ajax({
        url:'/register', 
        type: 'POST',
        data: registerData,
        dataType:'JSON'
      }).done(function() {
        console.log('info to route for registration succesful');
      });
    } else {
      msg = 'Please enter valid information!';

      $('#message').html(msg);
    }
  });
  
  
});
