import Batch from '../models/Batch.js'


// add batch
export const AddBatch = async(req,res)=>{
//   destrucre the data 
   const {name,schedule} = req.body

   // create a new batch instance
   const newBatch = new Batch({name,schedule})

   // save the batch to the database
   await newBatch.save()
   res.status(200).send({newBatch})
}

// show all batch
export const getAllBatch = async(req,res)=>{
   const allBatch = await Batch.find()
   res.status(200).send(allBatch)
}

