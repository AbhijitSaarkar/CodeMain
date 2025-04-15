import express from "express";
import userData from "./data/data.js";
import data from "./data/data.js";

const app = express();
app.use(express.json());
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));

// Route to test root
app.get("/", (req, res) => {
    res.send("Welcome to the Express server!");
});

// Route to get users
app.get("/api/v1/users", (req, res) => {
    const { name } = req.query;
    if (name) {
        const user = userData.filter((user) => {
            return user.name === name;
        });
        res.status(200).send(user);
    } else {
        res.status(200).send(userData);
    }
});

// Router params
app.get("/api/v1/users/:id", (req, res) => {
    const { id } = req.params;
    const parsedId = parseInt(id);
    const user = userData.find((user) => user.id === parsedId);
    res.status(200).send(user);
});

// Post Request (for sending data to the server)
app.post("/api/v1/users", (req, res) => {
    if (!req.body || !req.body.name || !req.body.displayName) {
        return res.status(400).send({
            message: "Missing required fields: name and displayName",
        });
    }

    const { name, displayName } = req.body; // Destructuring the body

    const newUser = {
        id: userData.length + 1,
        name,
        displayName,
    };

    userData.push(newUser);
    res.status(201).send({
        message: "User created successfully",
        data: newUser,
    });
});

// For updating data 
// PUT (update all fields)
app.put("/api/v1/users/:id", (req, res) => {
    const { body, params: { id } } = req;
    const parsedId = parseInt(id);
    const userIndex = userData.findIndex((user) => user.id === parsedId);

    if (userIndex === -1) {
        return res.status(404).send("User Not Found");
    }

    // Update the user at the found index
    userData[userIndex] = {
        id: parsedId,
        ...body,
    };

    res.status(201).send({
        message: "User updated", 
        data: userData[userIndex]
    });
});

// Patch (update specific field)
// (not implemented)

// Delete 
// (not implemented)

app.listen(PORT, () => {
    console.log("Server is connected at", PORT);
});
    