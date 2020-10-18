//const { response } = require("../app");

exports.getIndex = (req, res, next) => {res.render('index')};
exports.getRegistration = (req, res, next) => {res.render('registration')};
exports.getSignIn = (req, res, next) => {res.render('signin')};
exports.getFlight = (req, res, next) => {res.render('flight')};