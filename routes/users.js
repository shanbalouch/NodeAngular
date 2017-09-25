const express   = require('express');
const router    = express.Router();

//Register
router.get('/register', (req,res,next)=> {
   return res.send({message:"REGISTER"});

});

//Authenticate
router.get('/authenticate', (req,res,next)=>{
    res.send({message:"AUTHENTICATE"});
});

//Profile
router.get('/profile', (req,res,next)=>{
    res.send({message:"PROFILE"});
});

//Validate
router.get('/validate', (req,res,next)=>{
    res.send("/VALIDATE");
});


module.exports = router;