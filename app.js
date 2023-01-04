const express = require('express');

const cors = require('cors');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const truckRouter = require('./routes/truckRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//app.use(express.json());


// app.get('/api/v1/trucks', getAllTrucks);
// app.get('/api/v1/trucks/:id', getTruck);
app.use(cors());
app.use('/api/v1/trucks', truckRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) =>{    

    next(new AppError(`Cant find ${req.originalUrl} on this server!`));
})

app.use(globalErrorHandler);
module.exports = app;