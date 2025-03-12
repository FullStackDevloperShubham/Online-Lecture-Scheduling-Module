import { useEffect, useState } from "react";
import axios from "axios";

const CourseList = () => {
  const [courses, setCourses] = useState([]); 
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/courses");
        setCourses(res.data.courses);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setError("Failed to load courses. Please try again.");
      }
    };

    fetchCourses();
  }, []);

  // 🛑 Delete Course Function
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/courses/${id}`);
      setCourses(courses.filter((course) => course._id !== id)); // Remove from UI
    } catch (error) {
      console.error("Error deleting course:", error);
      setError("Failed to delete course. Please try again.");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Available Courses</h2>

      {/* Show Error Message */}
      {error && <p className="text-red-600">{error}</p>}

      {/* Display Courses */}
      {courses.length > 0 ? (
        courses.map((course) => (
          <div key={course._id} className="border p-4 rounded mb-3 shadow-lg flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">{course.name} ({course.level})</h3>
              <p className="text-gray-700">{course.description}</p>
            </div>
            
            {/* ❌ Delete Button */}
            <button 
              onClick={() => handleDelete(course._id)} 
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-600">No courses available.</p>
      )}
    </div>
  );
};

export default CourseList;
