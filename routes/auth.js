const router=require('express').Router();
const User=require('../models/User');

router.get('/register', (req,res) => {

  // console.log('get request');
});

router.post('/register', async(req,res) => {
    const user=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
    });
    try {
        const saveUser= await user.save();
        res.send(saveUser);

    } catch (error) {
        res.status(400).send(err);
    }
});


module.exports=router;