const express=require('express')
const router =express.Router()
router.post('/foodData',(req,res)=>{
    try{
        // console.log(req.body)
        res.send([global.food_items ,global.foodcaegory])
    }catch(error){
        console.log(error.message);
        res.send("server error")
    }
})
module.exports=router;