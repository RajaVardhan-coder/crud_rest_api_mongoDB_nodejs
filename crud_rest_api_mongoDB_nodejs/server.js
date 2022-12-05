const express = require('express')
const mongoose = require('mongoose')
const User = require('./model')
const app = express()
app.use(express.json())


mongoose.connect('').then(
    () => {
        console.log("connected to database")
    }
).catch(err => console.log(err))


app.post('/adduser', async(req,res) => {
    const {username} = req.body; 
    try{
        const newData = new User({username});
        await newData.save();
        return res.json(await User.find());
     }catch(err){
        console.log(err.message)
     }
})

app.get('/getallusers', async(req,res) => {
    try{
        const allData = await User.find();
        return res.json(allData)
    }catch(err){
        console.log(err.message)
    }
})


app.get('/getuser/:id', async(req, res) => {
    try{
        const data = await User.findById(req.params.id)
        return res.json(await User.find());
    }catch(err){
        console.log(err.message)
    }
})


app.delete('/deleteuser/:id', async(req, res) => {
    try{
        await User.findByIdAndDelete(req.params.id)
        return res.json(await User.find());
    }catch(err){
        console.log(err.message)
    }
})


app.listen(3000, ()=>{
    console.log("server started")
})