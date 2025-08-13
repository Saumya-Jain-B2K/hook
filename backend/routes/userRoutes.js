const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

// @route POST/ api/users/register
//@desc Register a new user
//@ access Public ( for this request )
router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        //registration logic
        let user = await User.findOne({ email });

        if (user) return res.status(400).json({message: "User already exist"});

        user = new User({name, email, password});
        await user.save();

        //create JWT Payload
        const payload = {user: {id: user._id, role: user.role}};

        //Sign and return token along with the user data
        jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "72h"}, (err, token) => {
            if (err) throw err;

            //send the user and token in response
            res.status(201).json({
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                },
                token,
            })
        });

    
    }

    catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
});

//@route POST /api/users/login
//@desc authenticate user
//@access Public

router.post("/login", async (req, res) =>{
    const { email, password } =req.body;

    try{
        //find the user by email
        let user = await User.findOne({email});

        if(!user) return res.status(400).json({ message: "Invalid Credentials"});
        const isMatch = await user.matchPassword(password);

        if(!isMatch)
            return res.status(400).json({message: "Invalid Credentials"});


        //create JWT Payload
        const payload = {user: {id: user._id, role: user.role}};

        //Sign and return token along with the user data
        jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "72h"}, (err, token) => {
            if (err) throw err;

            //send the user and token in response
            res.json({
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                },
                token,
            });
        });

    }
    catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
        
    }
});

//@route GET api/users/profile
//@desc Get the logged-in users profile (protected route and access will be private)
router.get("/profile", protect, async (req, res) =>{
    res.json(req.user);
});

module.exports = router;
