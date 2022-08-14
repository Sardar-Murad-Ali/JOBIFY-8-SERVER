const createJob=async (req,res)=>{
    res.send("this is job created")
}
const deleteJob=async (req,res)=>{
    res.send("this is job deleted")
}
const getAllJobs=async (req,res)=>{
    res.send("this is job is alljobs")
}
const updateJob=async (req,res)=>{
    res.send("this is job updated")
}
const showStats=async (req,res)=>{
    res.send("this is job is showstats")
}

export {
    createJob,
    deleteJob,
    getAllJobs,
    updateJob,
    showStats
}