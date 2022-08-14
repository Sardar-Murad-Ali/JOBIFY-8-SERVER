import { StatusCodes } from "http-status-codes"
const ErrorHandler=(err,req,res,next)=>{
  
    let Errors={
        statuscode:err.statuscode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg:err.message || "Something went wrong please try agin later!"
    }
    
    if(err.name==="ValidationError"){
        // Errors.msg=err.message
        Errors.statuscode=StatusCodes.BAD_REQUEST
        Errors.msg=Object.values(err.errors).map((all)=>all.message).join(",")
    }

    // the below is for unique err like in the email
    if(err.code && err.code===11000){
        Error.statuscode=StatusCodes.BAD_REQUEST
        Errors.msg=`${Object.keys(err.keyValue)}  has to be unique`
    }

   

    res.status(Errors.statuscode).json({msg:Errors.msg})
    // res.status(Errors.statuscode).json({msg:err})
}

export default ErrorHandler

