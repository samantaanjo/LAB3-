const mongoose = require('mongoose');

//Our Schema
const PeopleSchema = new mongoose.Schema
({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    age:{
        type: Number,
        default: new Date(),
        required: true
    },
    phone:{
        type:String,
        required:true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('People', PeopleSchema);