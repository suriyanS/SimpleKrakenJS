'use strict';

var AboutModel = require('../models/about');


module.exports = function (router) {

    var abtModel = new AboutModel();

    router.get('/', function (req, res) {

        res.render('about', abtModel);


    });

};
