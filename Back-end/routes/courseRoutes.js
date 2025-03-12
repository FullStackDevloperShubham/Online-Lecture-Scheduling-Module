import express from "express";
import {getAllCourse,addCourse,deleteCourse} from '../controllers/course.controller.js'

const router = express.Router();

// ✅ Add a new course
router.post("/courses", addCourse)

// ✅ Get all courses
router.get("/courses", getAllCourse)

// delete the course by id
router.delete("/courses/:id",deleteCourse)

// ✅ Update a course
// router.put("/courses/:id", async (req, res) => {
//   try {
//     const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json({ message: "Course updated successfully", course: updatedCourse });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// ✅ Delete a course
// router.delete("/courses/:id", async (req, res) => {
//   try {
//     await Course.findByIdAndDelete(req.params.id);
//     res.json({ message: "Course deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

export default router;
