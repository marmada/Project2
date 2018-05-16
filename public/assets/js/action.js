require ('dotenv').config ();

var API = require ('./keys.js');

var NutritionixClient = require('nutritionix');
var nutritionix = new NutritionixClient({
    appId: API.id,
    appKey:API.apiKey
    // debug: true, // defaults to false
});

$("#ui-select-search").change(function(){

  var query= $("input").val();

  nutritionix.autocomplete({ q: query })
  .then(successHandler, errorHandler)
  .catch(uncaughtExceptionHandler);

});

