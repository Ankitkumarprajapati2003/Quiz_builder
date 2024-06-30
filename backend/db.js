const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.2:27017/quiz'

const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=>{
        console.log('connected to mongo Successfully')
    })
}

module.exports = connectToMongo;



