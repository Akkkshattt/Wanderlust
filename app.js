const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 80;
const mongoose = require("mongoose");
const req = require("express/lib/request");
const res = require("express/lib/response");


require("./public/db/conn");
const Register = require("./public/models/register");
const Contact = require("./public/models/contact");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    //    console.log(req.url);
    res.status(200).sendFile(path.join(__dirname, "public", "home.html"));
})

app.get("/register.html", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "public", "register.html"));
})
app.post("/register.html", async (req, res) => {
    // res.status(200).sendFile(path.join(__dirname,"public","register.html"));
    try {
       const password = req.body.password;
       const cpassword = req.body.confirm_password;
        
       if(password===cpassword){
         const registeruser = new Register({
             fname : req.body.fname,
             lname : req.body.lname,
             email : req.body.email,
             gender : req.body.gender,
             phone : req.body.phone,
             password : req.body.password,
             confirm_password : req.body.confirm_password
         })

        const registered = await registeruser.save();
        res.status(201).sendFile(path.join(__dirname, "public", "home.html"));

       }else{
        //    res.send("Passwords are not matching");
        res.status(201).sendFile(path.join(__dirname, "public", "password.html"));
       }
    } catch (error) {
        res.status(400).send(error);
    }

})

app.get("/login.html", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "public", "login.html"));
})

app.post("/login.html", async (req, res) => {
    try {

        const email = req.body.email;
        const password =  req.body.password;

        const useremail = await Register.findOne({email:email});
        
        if(useremail.password === password){
            res.status(201).sendFile(path.join(__dirname, "public", "home.html"));
        }
        else{
            // res.send("Invalid login details");
            res.status(201).sendFile(path.join(__dirname, "public", "invalid.html"));
        }
} catch (error) {
        // res.status(400).send("Invalid login details");
        res.status(201).sendFile(path.join(__dirname, "public", "invalid.html"));
    }
})


app.get("/contact.html", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "public", "contact.html"));
})
app.post("/contact.html", async (req, res) => {
    try {  
          
         const contactus = new Contact({
            firstname : req.body.firstname,
             lastname : req.body.lastname,
             email : req.body.email,
             phone : req.body.phone,
             complain : req.body.complain,
         })
        
        const contactdetails = await contactus.save();
        res.status(201).sendFile(path.join(__dirname, "public", "home.html"));
    }catch (error) {
        res.status(400).send(error);
    }

})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
