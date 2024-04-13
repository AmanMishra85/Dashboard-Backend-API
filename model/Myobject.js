import mongoose from 'mongoose';

const mySchema = new mongoose.Schema({
    "end_year":String,
    "intensity":Number,
    "sector":String,
    "topic":String,
    "insight":String,
    "url":String,
    "region":String,
    "start_year":String,
    "impact":String,
    "added":Date,
    "published":Date,
    "country":String,
    "relevance":Number,
    "pestle":String,
    "source":String,
    "title":String,
    "likelihood":Number
})

const MyModel = mongoose.model("dashboard",mySchema);

export default MyModel;