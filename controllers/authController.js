import User from "../models/userModel.js"
import { StatusCodes } from "http-status-codes"
import {BadRequestError,NotFound} from "../errors/index.js"


const login = async (req,res)=>{
    res.send("this si login")
}

const register=async (req,res)=>{
        let {name,email,password}=req.body

        if(!name || !email || !password){
            throw new BadRequestError("Please provide all the fields")
            // throw new Error("please provide all the fields")
        }

        let emailpresent=await User.findOne({email})

        if(emailpresent){
            throw new BadRequestError("Email is already present")
        }


        let user=await User.create({name,email,password})


         let token= user.createJWT()
        

        res.status(StatusCodes.CREATED).json({user:{email:user.email,name:user.name,lastname:user.lastName,
       },token,location:user.location})
}


const updateuser=async (req,res)=>{
    res.send("this si updateuser")
}


export {
    login,
    register,
    updateuser
}