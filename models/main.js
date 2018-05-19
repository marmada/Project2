// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


// Import the ORM to create functions that will interact with the database.

var dietCheater ={};

    // Import the ORM to create functions that will interact with the database.

  all: function(table, cb) {
    orm.all(table, function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(table, cols, vals, cb) {
    orm.create(table, cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(table, objColVals, condition, cb) {
    orm.update("cats", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(table, condition, cb) {
    orm.delete(table, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (controller.js).
module.exports = dietCheater;






// Export the database functions for the controller controller.js).
module.exports = main;
