const User = require('../models/user');

exports.signup = (req, res, next) => {
    const user = new User({
        ...req.body
        /*firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password*/
    });
    user.save()
        .then(() => res.status(201).json({ message: 'Welcome!'}))
        .catch(
            (error) => {
                res.status(500).json({
                    error: error
                })
            }
        )
}