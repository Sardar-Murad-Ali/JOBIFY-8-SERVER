
import express from "express"
const router=express.Router()

import { login, register, updateuser } from "../controllers/authController.js"


router.route("/login").post(login)
router.route("/register").post(register)
router.route("/updateuser").patch(updateuser)

export default router