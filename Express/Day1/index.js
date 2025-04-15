import express from "express";
import userData from "./data/data.js";
import data from "./data/data.js";

const app = express();
const PORT = 8080;

app.use(express.json());

// Route to test root
app.get("/", (req, res) => {
    res.send("Welcome to the Express server!");
});

// Route to get users
app.get("/api/v1/users", (req, res) => {
    const {name} = req.query;

    if(name){
        const user = userData.filter((user)=>
        {
            return user.name ===name;
        })

        res.status(200).send(user)
    }
    res.status(200).send(userData);

});

//Router params

app.get("/api/v1/users/:id",(req,res)=>{

  const {id} = req.params;
  const parsedId = parseInt(id);

  const user = userData.find((user)=>user.id === parsedId)

    res.status(200).send(user)
}
)

//Post Request (it is for sending data to server)
app.post("/api/v1/users", (req, res)=>{

    const {name,displayname} = req.body; //destructuring the body 


    const newUser = {
        id:userData.length + 1,
        name,
        displayname
    }

    userData.push(newUser);
    res.status(201).send(
        {
            message:"User created successfully",
            data:newUser
        }
    );

})



app.listen(PORT, () => {
    console.log("Server is connected at", PORT);
});
