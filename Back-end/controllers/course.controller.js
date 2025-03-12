import Course from "../models/Course.js";

// add course into database
const  addCourse =  async(req, res) => {
    try {
      const { name, level, description} = req.body;
      console.log(name, level, description)
      const newCourse = new Course({ name, level, description });
      await newCourse.save();
      res.status(201).json({ message: "Course added successfully", course: newCourse });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // get all courses from database
const getAllCourse = async(req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json({courses});
  } catch (error) {
    res.status(500).send(error.message)
  }
};

// delete course from database
const deleteCourse = async(req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export  {
  addCourse,
  getAllCourse,
  deleteCourse
}