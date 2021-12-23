const mongoose = require('mongoose')
const config = require('config')
const db= config.get('mongoURL')

const connectDB = async () =>{
    try{
        await mongoose.connect(db, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true
        })
    }catch(e){
        console.log(e.message);
        process.exit(1);
    }
}
module.exports = connectDB