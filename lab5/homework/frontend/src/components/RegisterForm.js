import React, { useState } from "react";
import axios from "axios";

export default function RegisterForm() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      setMsg("Registration successful! You can now login.");
    } catch (err) {
      setMsg(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2 className="form-title">Đăng ký</h2>
        {msg && (
          <div className={msg.includes("successful") ? "success-message" : "error-message"}>
            {msg}
          </div>
        )}
        
        <div className="form-group">
          <input
            className="form-input"
            name="username"
            placeholder="Tên đăng nhập"
            value={form.username}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <input
            className="form-input"
            name="password"
            type="password"
            placeholder="Mật khẩu"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className="form-button">
          Đăng ký
        </button>
      </form>
    </div>
  );
}
