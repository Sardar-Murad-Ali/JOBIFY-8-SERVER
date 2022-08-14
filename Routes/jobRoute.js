import express  from "express"
let router=express.Router()

// import with.js is very neccessary
import { createJob, deleteJob, getAllJobs, updateJob,showStats } from "../controllers/jobController.js"


router.route("/").get(getAllJobs).post(createJob)

// the show statsmust br in the middle
router.route("/showStats").get(showStats)

router.route("/:id").patch(updateJob).delete(deleteJob)


export default router
