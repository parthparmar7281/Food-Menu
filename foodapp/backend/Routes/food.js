const express=require('express')
const food = require('../models/food')
const foodrouter =express.Router()
foodrouter.post('/item',async(req,res)=>{
    try {
        const newFood = new food({
            CategoryName:req.body.CategoryName,
            name:req.body.name,
            img:req.body.img,
            description:req.body.description
        })   

        await newFood.save();
        res.status(200).send(newFood)
    } catch (error) {
        console.log(error);
        res.status(500).send("Error occured!!")
    }
})

module.exports = foodrouter