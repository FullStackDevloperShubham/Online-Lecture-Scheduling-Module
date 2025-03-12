import { useState } from "react";
import axios from "axios";

const AddBatch = () => {
  const [batch, setBatch] = useState({
    name: "",
    schedule: "",
  });

  const handleChange = (e) => {
    setBatch({ ...batch, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/batches", batch);
      alert("Batch added successfully!");
      setBatch({ name: "", schedule: "" });
    } catch (error) {
      console.log("Error adding batch:", error.message);
      alert("Failed to add batch.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Add New Batch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold">Batch Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter batch name"
              value={batch.name}
              onChange={handleChange}
              required
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Schedule</label>
            <input
              type="text"
              name="schedule"
              placeholder="Enter schedule"
              value={batch.schedule}
              onChange={handleChange}
              required
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none bg-gray-50"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-lg"
          >
            Add Batch
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBatch;
