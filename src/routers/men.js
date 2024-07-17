const express = require('express');
const router = new express.Router();
const MensRanking = require('../models/mens');



router.post("/mens" ,async(req , res)=>{
    try{
        const addingRecord = new MensRanking(req.body)
        const insertRecord = await addingRecord.save();
        res.status(201).send(insertRecord);
    }catch(e){
        res.status(400).send(e);
    }
} )
router.get("/mens" , async (req ,res) =>{
    try {
        const getRecord = await MensRanking.find({}).sort({"ranking":1});
        res.send(getRecord);
    } catch (e) {
        res.status(400).send(e);
    }
})

router.get("/mens/:id" , async (req ,res) =>{
    try {
        const _id = req.params.id;
        const getMan = await MensRanking.findById({_id:_id});
        res.send(getMan);
    } catch (e) {
        res.status(400).send(e);
    }
})

router.patch("/mens/:id" ,async (req , res)=>{
    try{
        const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndUpdate(_id , req.body  ,{
            new:true
        });
        res.send(getMen);
    }catch(e){
        res.status(500).send(e);
    }
})

router.delete("/mens/:id" , async (req , res)=>{
    try {
        const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndDelete(_id);
        res.send(getMen);
        
    } catch (e) {
        res.status(404).send(e);
    }
})

module.exports = router;
