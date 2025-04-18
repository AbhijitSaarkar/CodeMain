import express from "express";


const router = express.Router();


// Generate-token 
// Home route 

router.get("/generate-token", (req, res) => {
    const token = "token";

    res.status(200).send({
        message: "Token generated please save it for future use",
        token: token
    });
});

router.get("/", (req, res) => {
    res.status(200).send({
        message: "Welcome to the Home page"
    });
});

export default router;