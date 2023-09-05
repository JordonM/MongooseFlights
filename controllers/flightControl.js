const Flight = require('../models/flight');

// Define all of our controller functions

// NEW
function newFlight(req, res) {
    console.log('The new route has been hit');
    res.render('flights/new', { errorMsg: ''});
}
// CREATE
function create(req, res) {
    console.log('Request Body:', req.body); // Add this line to inspect the request body
    Flight.create(req.body)
        .then(flightDoc => {
            console.log('Flight created:', flightDoc);

            // return res.send(`Flight Created - ${flightDoc.flightNo}`);
            // Instead of res.send, we will redirect
            res.redirect('/flights')
        })
        .catch(err => {
            console.log('Error creating flight:', err);
            // Handle validation errors
            if (err.errors) {
                const validationErrors = Object.values(err.errors).map(error => error.message);
                return res.send(`Validation errors: ${validationErrors.join(', ')}`);
            }
            return res.send('Error creating flight - check terminal');
        });
}



// INDEX
function index(req, res) {
    // here we use the mongoose model method find.
    Flight.find({})
        .then(flightDocs => {
            console.log('Found all these flights\n', flightDocs)

            res.render('flights/index', { flights: flightDocs })
        })
        .catch(err => {
            console.log('Error creating flight:', err);
            // Handle validation errors
            if (err.errors) {
                const validationErrors = Object.values(err.errors).map(error => error.message);
                return res.send(`Validation errors: ${validationErrors.join(', ')}`);
            }
            return res.send('Error creating flight - check terminal');
        });
}
// SHOW
// EDIT
// UPDATE
// DELETE

// Exports our functions
module.exports = {
    new: newFlight,
    create,
    index,
};