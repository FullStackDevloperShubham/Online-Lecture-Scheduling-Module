import mongoose from "mongoose";


const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: String, enum: ["Beginner", "Intermediate", "Advanced"], required: true },
  description: { type: String, required: true },
  image: { type: String },
  // batches: [batchSchema], // Embedded batches
});

const Course = mongoose.model("Course", courseSchema);
export default Course;
