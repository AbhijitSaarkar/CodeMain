import cookieParser from "cookie-parser";
import express from "express";
import session from "express-session"


const app = express()

app.use(session(
    {
        secret: "mysecret",
        saveUninitialized: false, 
        resave:false,
        cookie:{
            maxAge:1000*60*60*24
        }
    }
))

app.use(cookieParser("codesnippet"))

app.get ("/", (req,res)=>{
    console.log(req.session)
    console.log(req.session.id)
    res.send("Hello World")
})

app.get("/login",(req, res)=>{
    req.session.user ={
        name:"john",
        email:"john@example.com ",
        age:30
    }
    res.send("User logged in")
})

app.listen(3000,()=>{
    console.log("server is running on prot 3000")

})