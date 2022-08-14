import express from "express"
let app=express()
import cors from "cors"
// while importing it is necessary to put tyhe .js extension at the end
// we feel some problems or the bug so some imports or the function must be at the specific position
// like teh express-async error must at the top the or the show stat controller is at the middle
// the error handler is at teh last or the not found ata the second last
// call the correct name .env or the .gitignore

import "express-async-errors"
// the above will handle errors we need not to use the try catch the 
import dotenv from "dotenv"
dotenv.config()
import AuthRoute from "./Routes/authRoute.js"
import AuthJobs from "./Routes/jobRoute.js"



import ErrorHandler from "./middlewares/ErrorHandler.js"
import NotFound from "./middlewares/NotFound.js"
import connectdb from "./db/connect.js"

app.use(cors())
app.use(express.json())


// app.get("/",(req,res)=>{
//     res.json({"bnhb":"WELCOME!"})
// })


app.get("/api/v1",(req,res)=>{
    res.json({"bnhb":"WELCOME!"})
})

app.use("/api/v1/auth",AuthRoute)
app.use("/api/v1/jobs",AuthJobs)

app.use(NotFound)
app.use(ErrorHandler)

let port =process.env.PORT || 5000
// let port=2000



const start=async ()=>{
    try {
        await connectdb(process.env.MONGO_URL)
        app.listen(port,()=>{
           console.log("app hsx")
        })
        
    } catch (error) {
         console.log(error)
    }
}

start()

