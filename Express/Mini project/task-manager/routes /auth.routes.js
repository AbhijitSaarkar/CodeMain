import {Router} from "express";

const router = Router();

//login and logout

router.post("/login",(req,res)=>{
    res.send("Login Route")
})
router.post("/logout",(req,res)=>{
    res.send("Logout Route")
})

export default router;