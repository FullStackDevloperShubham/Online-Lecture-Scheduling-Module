import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import InstructorList from "./Components/Instructor/InstructorList";
import AddCourse from "./Components/AddCourse/AddCourse.jsx";
import CourseList from "./Components/CourseList/CourseList.jsx";
import AddBatch from "./Components/AddBatch/AddBatch.jsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 flex flex-col items-center py-8 px-4">
        <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
          {/* Navigation */}
          <nav className="flex justify-center gap-6 mb-6 border-b pb-4">
            <Link
              to="/"
              className="text-gray-700 font-semibold hover:text-blue-600 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/instructors"
              className="text-gray-700 font-semibold hover:text-blue-600 transition duration-300"
            >
              Instructors
            </Link>
            <Link
              to="/course-list"
              className="text-gray-700 font-semibold hover:text-blue-600 transition duration-300"
            >
              Courses
            </Link>
            <Link
              to="/add-course"
              className="text-gray-700 font-semibold hover:text-blue-600 transition duration-300"
            >
              Add Course
            </Link>
            <Link
              to="/addBatch"
              className="text-gray-700 font-semibold hover:text-blue-600 transition duration-300"
            >
              Add Batch
            </Link>
          </nav>

          {/* Routes */}
          <div className="text-center">
            <Routes>
              <Route
                path="/"
                element={
                  <h1 className="text-2xl font-bold text-gray-800">
                    Welcome to Admin Panel
                  </h1>
                }
              />
              <Route path="/instructors" element={<InstructorList />} />
              <Route path="/course-list" element={<CourseList />} />
              <Route path="/add-course" element={<AddCourse />} />
              <Route path="/addBatch" element={<AddBatch />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;