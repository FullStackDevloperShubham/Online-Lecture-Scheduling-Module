import  express from 'express';
const router = express.Router()
import {AddBatch,getAllBatch} from '../controllers/batchController.js'

// route
router.post('/batches',AddBatch)
// get all bactches
router.get('/all-batches',getAllBatch)

export default router;