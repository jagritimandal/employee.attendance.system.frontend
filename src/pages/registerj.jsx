// src/components/Register.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ep1 from "../api/ep1";

function Register() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    phone: "",
    password: "",
    role: "",
    regno: "",
    programcode: "",
    department: "",
    colid: "",
    status: "",
    gender: "",
    photo: "",
    expotoken: "",
    category: "",
    address: "",
    quota: "",
    user: "",
    addedby: "",
    status1: "",
    comments: "",
    lastlogin: "",
    section: "",
    semester: "",
    admissionyear:""
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       await ep1.post("/api/v2/registerj", form);
      alert("Registered successfully!");
    } catch (err) {
      if (
        err.response &&
        err.response.data &&
        (err.response.data.error?.toLowerCase().includes("email") ||
          err.response.data.message?.toLowerCase().includes("email"))
      ) {
        alert(
          "This email is already registered. Please use a different email or login."
        );
      } else {
        alert(err.response?.data?.error || "Registration failed");
      }
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="name" type ="String"placeholder="Full Name" onChange={handleChange} required />
        <input name="phone" type="string" placeholder="Phone" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <input name="role" type="string" placeholder="Role (admin/employee)" onChange={handleChange} required />
        <input name="regno" type="string" placeholder="Reg No" onChange={handleChange} required />
        <input name="programcode" type="string" placeholder="Program Code" onChange={handleChange} required />
        <input name="department" type="string" placeholder="Department" onChange={handleChange} required/>
        <input name="colid" type="number" placeholder="Col ID" onChange={handleChange} required />
        <input name="status" type="number" placeholder="Status" onChange={handleChange} required />
        <input name="gender" placeholder="Gender" onChange={handleChange} />
        <input name="photo" placeholder="Photo URL" onChange={handleChange} />
        <input name="expotoken" placeholder="Expo Token" onChange={handleChange} />
        <input name="category" placeholder="Category" onChange={handleChange} />
        <input name="address" placeholder="Address" onChange={handleChange} />
        <input name="quota" placeholder="Quota" onChange={handleChange} />
        <input name="user" placeholder="User" onChange={handleChange} />
        <input name="addedby" placeholder="Added By" onChange={handleChange} />
        <input name="status1" placeholder="Status1" onChange={handleChange} />
        <input name="comments" placeholder="Comments" onChange={handleChange} />
        <input name="lastlogin" type="datetime-local" onChange={handleChange} />
        <input type="section" placeholder="Section" onChange={handleChange} name="section" />
        <input type="semester" placeholder="Semester" onChange={handleChange} name="semester" />
        <input type="admissionyear" placeholder="Admission Year" onChange={handleChange} name="admissionyear" />
        <button type="submit" style={{ gridColumn: "1 / -1" }}>
          Register
        </button>
      </form>
      <div>
        <span>Already registered? </span>
        <button type="button" onClick={() => navigate("/loginj")}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Register;

