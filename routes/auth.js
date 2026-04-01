const router = require("express").Router();
const User = require("../models/User");

router.post("/register", async (req,res)=>{
    await User.create(req.body);
    res.send("Registered");
});

router.post("/login", async (req,res)=>{
    const user = await User.findOne(req.body);
    res.json({token:"dummy-token"});
});

module.exports = router;