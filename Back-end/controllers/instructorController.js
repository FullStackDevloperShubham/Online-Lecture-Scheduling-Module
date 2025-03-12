import Instructor from "../models/Instructor.js";

// Get all instructors
export const getInstructors = async (req, res) => {
  try {
    const instructors = await Instructor.find();
    res.json(instructors);
  } catch (error) {
    res.status(500).json({ message: "Error fetching instructors", error });
  }
};

// Add a new instructor
export const addInstructor = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newInstructor = new Instructor({ name, email });
    await newInstructor.save();
    res.status(201).json(newInstructor);
  } catch (error) {
    res.status(500).json({ message: "Error adding instructor", error });
  }
};

// Update an instructor
export const updateInstructor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const updatedInstructor = await Instructor.findByIdAndUpdate(
      id,
      { name, email },
      { new: true }
    );

    if (!updatedInstructor) {
      return res.status(404).json({ message: "Instructor not found" });
    }

    res.json(updatedInstructor);
  } catch (error) {
    res.status(500).json({ message: "Error updating instructor", error });
  }
};
