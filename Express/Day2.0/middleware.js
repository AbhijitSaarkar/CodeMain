import express from "express";


const app = express();

//global middleware

function SayHiMiddleware (req,res,next){

    console.log("Hi I am Middleware");
    next();


}

// app.use(SayHiMiddleware);



// app.get("/", (req, res)=>{
//     res.send("Hello world");
// })

app.get("/",SayHiMiddleware,(req, res)=>{
    res.send("Hello world")
})

app.get("/users",(req,res)=>{
    res.send("users Page")
})

app.listen(3000,()=>{
    console.log(`Server is running on port 3000`)
})

// global middleware
// specific routes middleware 
// inbuilt middleware 