const router = require("express").Router();
const Booking = require("../models/Booking");

router.post("/check", async (req,res)=>{
    let exists = await Booking.findOne({date:req.body.date});
    res.json({available: !exists});
});

router.post("/book", async (req,res)=>{
    await Booking.create(req.body);
    res.send("Booked");
});

module.exports = router;