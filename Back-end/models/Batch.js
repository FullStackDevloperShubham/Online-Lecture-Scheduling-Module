import mongoose from "mongoose";

const batchSchema = new mongoose.Schema({
  name: { type: String, required: true },
  schedule: { type: String, required: true }
});

const Batch = mongoose.model("Batch", batchSchema);
export default Batch;