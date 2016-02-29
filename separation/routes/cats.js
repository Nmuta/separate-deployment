var express = require('express');
var router = express.Router();
var knex = require("../db/knex");


var Cat = function(){
  return knex('cats');
}


router.get("/", function(req,res){

   Cat().select().then(function(payload){
     res.json(payload);
   });

});


module.exports = router;
