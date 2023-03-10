const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env'});

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.connect( DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(con => {
    console.log('Database connected!');
});

const port = process.env.PORT || 5000;
const server = app.listen(port, () =>{
    console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', err =>{
    console.log(err.name, err.message);
    console.log('Unhandled Rejection');
    server.close(() =>{
        process.exit(1);
    });
});

process.on('uncaughtException', err =>{
    console.log('Uncaught Exception, Shutting down the server...');
    console.log(err.name, err.message);
    server.close(()=>{
        process.exit(1);
    })
})

