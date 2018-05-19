//require('dotenv').config();

$(function() {
 

  //var apikey = process.env.APIKEY;
 // console.log(apikey);

    // function 1 to grabs "search" for user and GET Nutrition data
  $.ajaxSetup({ cache: false });
  $('#search').keyup(function() {
    $('#result').html('');
    var q = $('#search').val();
    var resultDropdown = $('#result');
    console.log(q);

   var apikey = 'R8gYygJ9lQqhfgowOnDP2afcsq5YM7tRNp7cPqTl';

    var queryURL =
      'https://api.nal.usda.gov/ndb/search/?format=json&sort=r&max=25&offset=0&api_key=' +
      apikey +
      '&q=' + q;

    console.log(queryURL);

    $.getJSON({
      url: queryURL,
      method: 'GET',
    }).done(function(response) {

      var options= response.list.item;

//loop thru response

      for (i = 0; i < options.length; i++){

        var product =options[i].name.split(',');
        var item = $('<li>')
        item.addClass("list-group-item link-class");
        item.attr("id", options[i].ndbno);
        item.text(product[0]);

        resultDropdown.append(item);

           }
      });
    });
  

  /*$('#search').on('submit', function(event) {
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
  });*/

  // Ajax to grab information from user login input for validation

  $('#loginS').on('click', function(event) {
    event.preventDefault();

    // get the form data & validate is not "blank"

    var loginData = {
      user: $('#email').val().trim(),
      password: $('#password').val().trim(),
    };
    console.log(loginData);

    if (loginData.user != '' && loginData.password != '') {
      // process the form
      $.ajax({
        url: '/login',
        type: 'POST',
        data: loginData,
        dataType: 'JSON',
      }).done(function() {
        console.log('info to route for validation succesful');
      });
    } else {
      msg = 'Invalid username and password!';

      $('#message').html(msg);
    }
  });

  $('#register').on('click', function(event) {
    event.preventDefault();

    // get the form data & validate is not "blank"

    var registerData = {
      email: $('#email-2').val().trim(),
      password: $('#password-2').val().trim(),
      nickname: $('#nickname').val().trim(),
      name: $('#name').val().trim(),
      lastname: $('#lastname').val().trim(),
      weight: $('#weight').val().trim(),
      height: parseInt($('#height-ft').val()) * 12 + parseInt($('#height-in')),
    };
    console.log(loginData);

    if (
      registerData.user != '' &&
      registerData.password != '' &&
      registerData.nickname != ''
    ) {
      // process the form
      $.ajax({
        url: '/register',
        type: 'POST',
        data: registerData,
        dataType: 'JSON',
      }).done(function() {
        console.log('info to route for registration succesful');
      });
    } else {
      msg = 'Please enter valid information!';

      $('#message').html(msg);
    }
  });
});
