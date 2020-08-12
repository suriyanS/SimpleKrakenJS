'use strict';

var FoodItemsModel = require('../models/foodItems');


module.exports = function (router) {

    var fdItemsModel = new FoodItemsModel();

    router.get('/', function (req, res) {

        res.render('foodItems', fdItemsModel);


    });

};
