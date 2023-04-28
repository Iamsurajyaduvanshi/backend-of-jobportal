import express from "express"
import { createJobController, deleteJobController, getAllJobController, updateJobController } from "../controllers/jobController.js";
const router = express.Router()

router.post('/create-jobs',createJobController)
router.get('/get-jobs',getAllJobController)

// update
router.patch('/update-jobs/:id',updateJobController)

// delete
router.delete('/delete-job/:id',deleteJobController)

export default  router;