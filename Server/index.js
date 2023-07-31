const express = require('express');
const cors=require('cors');
const mongoose = require('mongoose');
const Register = require("./Models/Register");
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
const Query = require('./Models/Query');
const Cart = require('./Models/Cart');
// const { default: Info } = require('../e-commerce/src/Component/Info');


const app = express();

app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect('mongodb+srv://manobhavmehta:manu@cluster0.57di3hj.mongodb.net/?retryWrites=true&w=majority')

const secret = "snccnsjncashbhjsvjkdhjcvbv";

app.post('/register',async (req,res) =>{
        
        const {name,email,pass,cpass} = req.body;
        try{
            const userDoc = await Register.create({email,name,pass,cpass});
            const cartInfo = await Cart.create({email})
            res.status(200).json(userDoc);
        }
        catch(e){
            console.log(e);
            res.status(400).json(e);
        }
        
});

app.post('/login', async(req,res) =>{
    const {email,pass} = req.body;
    const Userdoc = await Register.findOne({email});
    if(Userdoc.pass === pass)
    {
        jwt.sign({email,id:Userdoc._id},secret,{},(err,token) =>{
            if(err) throw err;
            res.cookie('token',token).json({
                id:Userdoc._id,
                email,
            });
        });
    }
    else
    {
        res.status(400).json('Wrong credentials');
    }

})

app.get('/profile',(req,res) => {
    const {token} = req.cookies;
    if(!token){
        return res.status(404).send();
    }
    jwt.verify(token,secret,{},(err,info) =>{
        if (err) res.status(404).send();
        else
            res.json(info);
    })
})

app.post('/logout',(req,res) =>{
    res.cookie('token','').json('ok');
})

app.post('/query',async (req,res) =>{
        
    const {name,email,query} = req.body;
    try{
        const userDoc = await Query.create({name,email,query});
        console.log(userDoc);
        res.status(200).json(userDoc);
    }
    catch(e){
        console.log(e);
        res.status(400).json(e);
    }
    
});

app.post('/add', async (req,res) =>{
    const {token} = req.cookies;
    if(!token){
        return res.status(403).send();
    }
    const data=jwt.verify(token,secret);
    const email=data.email;

    const {name,price,image,review} = req.body;
    const doc= await Cart.findOne({email:email});
    try{
        doc.cart.push({name:name,price:price,image:image,review:review});
        await doc.save();
        res.status(200);
    }
    catch(e){
        console.log(e);
        res.status(400).json(e);
    }
    
})

app.get('/addtocart',async (req,res) =>{
    const {token} = req.cookies;
    if(!token){
        return res.status(403).send();
    }
    const data=jwt.verify(token,secret);
    const email=data.email;
    try{
        const doc = await Cart.findOne({email:email});
        res.status(200).json(doc.cart);
    }
    catch(e){
        res.status(400).json(e);
    }
})

app.post('/delpro' , async(req,res)=>{
    const {token} = req.cookies;
    if(!token){
        return res.status(403).send();
    }
    const data=jwt.verify(token,secret);
    const email=data.email;
    const {name}= req.body;
    // console.log(name);
    try{
        let doc = await Cart.findOne({email:email});
        doc.cart.remove({name:name});
        await doc.save();
        const ans=await Cart.findOne({email});
        res.status(200).json(ans.cart);
    }
    catch(e){
        console.log(e);
        res.json(400).json(e);
    }
})

app.listen(5000,()=>{
    console.log('server is running on 5000');
});