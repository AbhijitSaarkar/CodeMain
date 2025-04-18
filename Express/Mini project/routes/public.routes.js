import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if(!fs.existsSync(path.join(__dirname, "logs"))){
    fs.mkdirSync(path.join(__dirname,"logs"))
}

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