const mongoose = require('mongoose');

const rank = new mongoose.Schema({
    rank:{
        type:Number,
        require:true
    }
})

module.exports = mongoose.model('rank',rank)