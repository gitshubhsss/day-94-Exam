const express = require("express");
const app=express();

const port=8080;

app.set("view engine","ejs");

app.listen(port,()=>{
    console.log("app is listening on the port 8080")
})

app.get("/",(req,res)=>{
    res.render("home.ejs")
})
app.get("/AdminLogin",(req,res)=>{
    res.render("adminForm.ejs")
})
app.get("/UserLogin",(req,res)=>{
   res.send("you are on admin panel")
});

app.post("/adminpanel",(req,res)=>{
    
})



