import mongoose from "mongoose";

const instructorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const Instructor = mongoose.model("Instructor", instructorSchema);

export default Instructor;
