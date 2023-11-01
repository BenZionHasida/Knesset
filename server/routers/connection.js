import express from "express";
import User from '../models/users.js'; 

const router = express.Router()

// route login form
router.post('/login',(req,res)=>{
    const data = req.body;
    console.log(data)
    res.json({status:Math.random()> 0.5})
})

// route register form
router.post('/register',async (req,res)=>{
    const data = req.body.registerDetails
    const {userName, email, password} = data
    const user = await User.create({userName, email, password})
    console.log(User.find());
    console.log('------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------');
    // res.json(user)

    const status = ['ok','Username already in use','Email already in use']
    res.json({status: status[Math.floor(Math.random()*2)]})
})



export default router