const Truck = require ('./../models/truckModel');
const catchAsync = require('./../utils/catchAsync');
const APIFeatures = require ('./../utils/apiFeatures');
const AppError = require('../utils/appError');

exports.getAllTrucks = catchAsync(async (req, res, next) =>{
   
        //Execute query
        const features = new APIFeatures(Truck.find(), req.query)
        .filter()
        .sort()
        .limitField()
        .paginate();
        const trucks = await features.query;

    //Response    
    res.status(200).json({
        status: 'success',
        results: trucks.length,
        data: {
            trucks: trucks
        }
    })
      
})

exports.getTruck = catchAsync(async (req, res, next) => {
   
        const truck = await Truck.findById(req.params.id);
        //Truck.findOne({ _id: req.params.id})

        if(!truck) {
            return next(new AppError('No truck found with that ID', 404))
        }

        res.status(200).json({
            status: 'success',
            data: {
                trucks: truck
               }
             })
      
})
