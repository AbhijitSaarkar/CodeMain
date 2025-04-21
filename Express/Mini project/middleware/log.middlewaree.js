import express from "express";
import publicRoutes from "./routes/public.routes.js";
import privateRoutes from "./routes/private.routes.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import LogMiddleware from './Middleware/log.Middleware.js'
import { error } from "console";

const app = express();
const PORT = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// LogMiddleware definition (fixed string template literals and variable name)
const LogMiddleware = (req, res, next) => {
    const log = `[${new Date().toISOString()}] ${req.method} ${req.url}\n`;
    const logFile = path.join(__dirname, "../logs/request.log");
    
    fs.appendFile(logFile, log, (err) => {
        if(err) console.error('Failed to log request', err);
    });
    
    next(); // Don't forget to call next() to continue the request
};

// Create logs directory if it doesn't exist
if(!fs.existsSync(path.join(__dirname, "../logs"))){
    fs.mkdirSync(path.join(__dirname, "../logs"), { recursive: true });
}

// *InBuilt Middleware
app.use(express.json());

// !Global Custom Middleware
app.use(LogMiddleware);

// ?Middleware to Routes
app.use("/public", publicRoutes);
app.use("/private", privateRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export default LogMiddleware