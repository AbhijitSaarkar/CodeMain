import express from "express";
import authMiddleware from "../middleware/authMiddleware";

const router = express.Router();

// Dashboard  
router.get("/dashboard",authMiddleware,(req, res) => {
    res.status(200).send({
        message: `Welcome to Dashboard ${req.user.name}`,
    });
});

export default router;