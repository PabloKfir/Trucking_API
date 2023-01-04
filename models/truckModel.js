const mongoose = require('mongoose');

const truckSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: [true, 'Please spcify the truck brand']
    },
    model: {
        type: String,
        required: [true, 'Please specify the truck model']
    }

});

const Truck = mongoose.model('Truck', truckSchema);

module.exports = Truck;