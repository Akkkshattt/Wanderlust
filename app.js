const express = require("express");
const app = express();
const path= require("path");
const port =80;

// app.use("/",(req,res,next)=>{
//     console.log(req.url);
//     next();
//    });
   
   app.use(express.static(path.join(__dirname,"public")));
   
   app.get("/",(req,res)=>{
    //    console.log(req.url);
       res.status(200).sendFile(path.join(__dirname,"public","home.html"));
   })
   
   app.listen(port,()=>{
       console.log(`Server is running on port ${port}`);
   })