// before taht our script is different see in the gitup jobify 3 and we are doing this in teh server package.json not in th eclient

// the below to connect the server and the client
// alawys save when you make any change

// "scripts": {
// "server": "nodemon server ",
//   },

// run run server

// close the server then

// "scripts": {
//     "server": "nodemon server ",
//     "client": "npm start --prefix client"
//   },
// npm run client

// the client will run cause of teh npm start in the client

// stop the server

// do teh below
// "scripts": {
//     "server": "nodemon server --ignore client",
//     "client": "npm start --prefix client",
//     "start": "concurrently --kill-others-on-fail \"npm run server\" \" npm run client\""
//   },

// alawys save when you make any change

// run npm start

// both the server and the client runs

// if err occoured port already in use then change the port and then save always save when make change
// if err occoured port already one sol change port save or just save it again
// it will run anyway npm start make change in client and server they will get changed
// need to replace the above script with teh previous one and then save and npm satrt need to make change in teh client and and save tehn teh client also runs

// want ti install something in the client go by the command cd client and insytall go back to server by cd npm start

// npm install cors in the server js 
// invoke cors 
// you have to provide teh full url

// but for the proxy just write 
// "proxy": "http://localhost:5000"

// do not need to provide teh full URL

// and then proxy do not work with single "/"


import User from "../models/userModel.js"
import { StatusCodes } from "http-status-codes"
import {BadRequestError,NotFound} from "../errors/index.js"


const login = async (req,res)=>{
    res.send("this si login")
}

const register=async (req,res)=>{
    


   
// const register=async (req,res,next)=>{

    // try {
    //     let user=await User.create(req.body)
    //     res.status(201).json({user})
    // } catch (error) {
        //     // res.status(500).json({msg:'There was an error'})
        //     next(error)
        // }
// }
        
        // below by using teh express async errors in the server.js we need not to use the nect the error is gone in the err in the error handler middleware
        // the belew is another way to control the errors
        // in the error handler the meassage please prode all.. will go in the err.message
        // and if we control the errors in this way the err validaton we defined in the error habdler will not work
        // this  below is also using the express async errors
        // the preference is given to the throw new erroe message then the if condition meassage
        let {name,email,password}=req.body
        if(!name || !email || !password){
            // throw new Error("please provide all the fields")
            throw new BadRequestError("Please provide all the fields")
        }


            let user=await User.create(req.body)
            res.status(StatusCodes.CREATED).json({user})
}


const updateuser=async (req,res)=>{
    res.send("this si updateuser")
    // If we use findoneandupdate then the hash password will not work it will only work for the user.create and the user.save
}


export {
    login,
    register,
    updateuser
}