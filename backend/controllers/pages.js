//const { response } = require("../app");

exports.getIndex = (req, res, next) => {res.render('index')};
exports.getRegistration = (req, res, next) => {res.render('registration')};
exports.getSignIn = (req, res, next) => {res.render('sign_in')};