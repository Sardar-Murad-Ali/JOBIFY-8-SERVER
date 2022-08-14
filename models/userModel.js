import mongoose from "mongoose";
import validator from "validator";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

const TaskSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Provide the name"],
        minlength:3,
        maxlength:20,
        trim:true
    },
    email:{
        type:String,
        required:[true,"Please Provide the email"],
        unique:true,
        validate:{
            validator:validator.isEmail,
            messsage:"Please Provide The Valid Email"
        }
    },
    
    password:{
        type:String,
        required:[true,"Please Provide the password"],
        minlength:3,
        // the below will mot work for the .craete and this is for that dont make see the password in the postman
        // select:false
    },
    
    lastName:{
        type:String,
        minlength:3,
        maxlength:20,
        trim:true,
        default:"LastName"
    },
    location:{
        type:String,
        minlength:3,
        maxlength:20,
        trim:true,
        default:"Bahawalpur"
    }
})

// the below will not work for the errow function
// run for the user.craete and user.save
// when we make changings in the .env we then have to restart the server npm start

TaskSchema.pre("save",async function(){
let salt=await bcryptjs.genSalt(10)
this.password=await bcryptjs.hash(this.password,salt)
})

TaskSchema.methods.createJWT=function(){
    return jwt.sign({userID:this._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_LIFETIME})
}


export default mongoose.model("JobifyUser",TaskSchema)
