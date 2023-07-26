const express = require('express');
const blog = require('./model/blog.js')
const Rank = require('./model/ranking.js')
const app = new express();

app.use(express.json())

const mongoose = require('mongoose');
const uri = "mongodb+srv://mrinmoy:1234@summerpep.dono6ji.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(uri).then(console.log("Database connected")).catch((err)=>console.log(err));
const db = mongoose.connection;

const insert= async()=>{

    await db.blogs.insertOne({ title:'Blog1',
    content:"eonveavnnp;eo",
    author:"MG",
    id:1,
    ranking:1})
}

const blogs = [
    {blog1:{
        title:'Blog1',
        content:"eonveavnnp;eo",
        author:"MG",
        id:1,
        ranking:1
    }},   
     {blog2:{
        title:'Blog2',
        content:"eonveavnnp;eo",
        author:"MG",
        id:2,
        ranking:2
    }},    
    {blog3:{
        title:'Blog3',
        content:"eonveavnnp;eo",
        author:"MG",
        id:3,
        ranking:3
    }}
]
const sample = {title:'Blog0',
content:"eonveavnnp;eo",
author:"MG",
id:1,
ranking:1,
likes:1000}

app.post('/',async (req,res)=>{
    const post = new blog(sample);
    try{
        const saveblog  = await blog.insert;
        res.status(200).json(saveblog)
    }
    catch(error){
        res.send(error);
    }
})

app.get('/',async(req,res)=>{
    try{

        let data = await blog.find().sort({likes:1});  //Sorting according to the number likes
        
        res.status(200).json(data);
    }
    
    catch(error){
        res.status(500).json(error)
    }
})




app.listen(4000,()=>{console.log("Server running...")})