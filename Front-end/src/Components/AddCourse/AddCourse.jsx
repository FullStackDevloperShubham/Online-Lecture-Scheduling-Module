import { useState } from "react";
import axios from "axios";

const AddCourse = () => {
  const [course, setCourse] = useState({
    name: "",
    level: "Beginner",
    description: "",
    image: "",
    batches: [{ name: "", schedule: "" }],
  });
  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

//   const handleBatchChange = (index, e) => {
//     const { name, value } = e.target;
    
//     setCourse((prevState) => {
//       const updatedBatches = prevState.batches.map((batch, i) =>
//         i === index ? { ...batch, [name]: value } : batch
//       );
//       return { ...prevState, batches: updatedBatches };
//     });
//   };

//   const addBatch = () => {
//     setCourse((prevState) => ({
//       ...prevState,
//       batches: [...prevState.batches, { name: "", schedule: "" }],
//     }));
//   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/courses", course, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Course added successfully!");
    } catch (error) {
      console.log("Error submitting course:",error.message);
      alert("Failed to add course. Check console for details.");
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Add New Course</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Course Name"
          value={course.name}
          onChange={handleChange}
          required
          className="border p-2 rounded w-full"
        />
        <select
          name="level"
          value={course.level}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        >
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
        <textarea
          name="description"
          placeholder="Course Description"
          value={course.description}
          onChange={handleChange}
          required
          className="border p-2 rounded w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse