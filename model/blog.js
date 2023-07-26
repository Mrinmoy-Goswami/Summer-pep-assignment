const mongoose = require('mongoose');

const Blogs = new mongoose.Schema({
    title:{
        type:String,
        require : true
    },
    content:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    }    ,
    id:{
        type:Number,
        require:true
    },
    ranking:{
        type:Number,
        require:true
    }
    

})
module.exports = mongoose.model('Blogs',Blogs);