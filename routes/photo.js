const router = require("express").Router();
const Photo = require("../model/Photo");

router.post("/upload", async (req,res)=>{
    // simplified (real needs multer)
    res.send("Uploaded");
});

module.exports = router;