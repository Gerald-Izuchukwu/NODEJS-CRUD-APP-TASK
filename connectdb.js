const mongoose = require('mongoose')
// require('dotenv').config();
// const { mongo_URI} = process.env;

const connectionDb = async ()=>{
    try {
        const connection = await mongoose.connect('mongodb+srv://Gerald:426759813@cluster0.qio4g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify : false

        },)
        console.log(`data base is connected on ${connection.connection.host}`)
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = connectionDb


