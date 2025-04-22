import cookieParser from "cookie-parser";
import express from "express";
import session from "express-session";

const app = express();

app.use(session({
    secret: "mysecret",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}));

app.use(cookieParser("codesnippet"));

app.get("/", (req, res) => {
    console.log(req.session);
    console.log(req.session.id);
    
    // Check if user exists in session before trying to access its properties
    if (req.session.user) {
        console.log(req.session.user.name); // This will now log the user's name if it exists
    } else {
        console.log("No user in session yet. Please visit /login first");
    }
    
    res.send("Hello World");
});

app.get("/login", (req, res) => {
    req.session.user = {
        name: "john",
        email: "john@example.com",
        age: 30
    };
    console.log(`User logged in: ${req.session.user.name}`); // Log the user's name after login
    res.send(`${req.session.user.name} is logged in`);
});

app.listen(3000, () => {
    console.log("server is running on port 3000");
});