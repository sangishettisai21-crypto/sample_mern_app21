let express = require('express');
let router=express.Router();

router.post("register", (req, res) => {
    res.send("register route");
})

router.post("login", (req, res) => {
    res.send("login route");
})
 
router.get("viewtask", (req, res) => {
    res.send("view task route");
})

router.put("updatestatus", (req, res) => {
    res.send("update status route");
})

module.exports=router;