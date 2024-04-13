import mongoose from 'mongoose';

const dbConnection = async(uri) =>{
    await mongoose.connect(uri);

    console.log("Connected to Database!")
}

export default dbConnection;