// Import Mongoose
const mongoose = require('mongoose')
// Now we write the rules for our movies
const flightSchema = new mongoose.Schema(
    {
      airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        required: true,
      },
      airport: {
        type: String,
        enum: ['AUS', 'DFW', 'JFK', 'LAX', 'SAN'],
        default: 'DEN',
      },
      flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999,
      },
      departs: {
        type: Date,
        default: () => {
          const oneYearFromNow = new Date();
          oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
          return oneYearFromNow;
        },
      },
    },
    {
      timestamps: true, // Add timestamps fields createdAt and updatedAt
    }
  );


const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;