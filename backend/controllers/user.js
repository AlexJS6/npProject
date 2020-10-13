const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const user = require('../models/user');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
            const user = new User({
            ...req.body,
            password: hash
        })
    
    user.save()
      .then(() => res.status(201).json({ message: 'Welcome!'}))
      .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.signin = (req, res, next) => {
    user.findOne({email: req.body.email}).then(
        (user) => {
            if (!user) {
                return res.status(401).json({
                    error: new Error('User not found!')
                })
            }
            bcrypt.compare(req.body.password, user.password).then(
                (valid) => {
                    if (!valid) {
                        return res.status(401).json({
                            error: new Error('Incorrect password')
                        })
                    }
                    const token = jwt.sign(
                        {userId: user._id},
                        'RANDOM_TOKEN_STRING',
                        {expiresIn: '24h'}
                    )
                    res.status(200).json({
                        userId: user._id,
                        token: token
                    })
                }
            ).catch(
                (error) => {
                    res.status(500).json({
                        error: error
                    })
                }
            )
        }
    ).catch(
        (error) => {
            res.status(500).json({
                error: error
            })
        }
    )
}