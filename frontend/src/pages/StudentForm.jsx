import { useState, useEffect } from "react";
import "./StudentForm.css";

function StudentForm() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: ""
  });

  const [editingId, setEditingId] = useState(null);

  const API = "http://localhost:4000/students";

  // Fetch students
  const getStudents = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  // Handle input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Submit (CREATE or UPDATE)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await fetch(`${API}/${editingId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        });
      } else {
        await fetch(API, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        });
      }

      setForm({ name: "", email: "", age: "" });
      setEditingId(null);
      getStudents();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // Delete
  const handleDelete = async (id) => {
    try {
      await fetch(`${API}/${id}`, {
        method: "DELETE"
      });
      getStudents();
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  // Edit
  const handleEdit = (student) => {
    setForm({
      name: student.name,
      email: student.email,
      age: student.age
    });
    setEditingId(student.id);
  };

  // Cancel edit
  const cancelEdit = () => {
    setEditingId(null);
    setForm({ name: "", email: "", age: "" });
  };

  return (
    <div className="container">
      <h2>Student Management</h2>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {editingId ? "Update Student" : "Add Student"}
        </button>

        {editingId && (
          <button type="button" onClick={cancelEdit}>
            Cancel
          </button>
        )}
      </form>

      {/* LIST */}
      <h3>All Students</h3>
      <ul>
        {students.map((s) => (
          <li key={s.id}>
            <span>
              {s.name} - {s.email} - {s.age}
            </span>

            <div className="actions">
              <button onClick={() => handleEdit(s)}>Edit</button>
              <button onClick={() => handleDelete(s.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentForm;