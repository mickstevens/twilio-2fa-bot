var express = require('express');
var router = express.Router();

module.exports = function() {
  router.route('/')
    .get(function(req, res) {
      res.render('index');
    });

  return router;
};