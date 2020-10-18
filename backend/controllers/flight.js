const flight = require('../models/flight');

let country  = req.body.country;
let currency = req.body.currency;
let locale = req.body.locale;
let depart = req.body.origin;
let destination = req.body.destination;
let partial_date = req.body.date;



exports.getFlight = (req, res, next) => {
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
