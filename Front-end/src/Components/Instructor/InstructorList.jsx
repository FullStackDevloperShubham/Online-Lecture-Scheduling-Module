import { useState, useEffect } from "react";

const InstructorList = () => {
  const [instructors, setInstructors] = useState([]);
  const [form, setForm] = useState({ _id: null, name: "", email: "" });
  const [isEditing, setIsEditing] = useState(false);

  // Fetch instructors
  const fetchInstructors = async () => {
    try {
      const res = await fetch("http://localhost:5000/instructors");
      const data = await res.json();
      setInstructors(data);
    } catch (err) {
      console.error("Error fetching instructors:", err);
    }
  };

  useEffect(() => {
    fetchInstructors();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = isEditing ? "PUT" : "POST";
    const url = isEditing
      ? `http://localhost:5000/instructors/${form._id}`
      : "http://localhost:5000/instructors";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: form.name, email: form.email }),
    });

    setIsEditing(false);
    setForm({ _id: null, name: "", email: "" });

    fetchInstructors(); // ✅ Refetch updated data
  };

  const handleEdit = (instructor) => {
    setForm({ _id: instructor._id, name: instructor.name, email: instructor.email });
    setIsEditing(true);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Instructor List</h2>
      <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="border p-2 rounded w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="border p-2 rounded w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {isEditing ? "Update" : "Add"}
        </button>
      </form>
      <div className="space-y-3">
        {instructors.map((inst) => (
          <div key={inst._id} className="flex justify-between p-3 border rounded">
            <div>
              <p className="font-semibold">{inst.name}</p>
              <p className="text-sm text-gray-500">{inst.email}</p>
            </div>
            <button
              className="bg-yellow-500 text-white px-3 py-1 rounded"
              onClick={() => handleEdit(inst)}
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorList;
