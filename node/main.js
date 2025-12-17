const express = require("express");
const app = express()
app.use(express.json())

const users = [
  { id: 1, username: "alice", password: "password123" } 
];

function basicauth(req,res , next){
    
}

app.get("/",(req,res)=>{
    res.send({"msg" : " fck u bro"})
});

app.get("/profile" , basicauth ,(req,res)=>{
    res.json({"msg":"welcome man"})
});

app.listen(3000 , ()=>{
    console.log("started bro ok na")
});