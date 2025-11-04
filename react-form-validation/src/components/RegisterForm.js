import React, { useState } from "react";
import "./RegisterForm.css";

const nameRegex = /^[A-Za-z\s]{2,50}$/;            // Only letters + spaces, 2-50 chars
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/; // Simple but solid email check
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
// - at least 8 chars
// - at least one uppercase, one lowercase, one digit, one special char

export default function RegisterForm() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [touched, setTouched] = useState({}); // track touched fields
  const [submitted, setSubmitted] = useState(false);

  const validate = {
    name: nameRegex.test(form.name),
    email: emailRegex.test(form.email),
    password: passwordRegex.test(form.password),
  };

  const errors = {
    name: !validate.name && touched.name ? "Name should be 2-50 letters (only letters & spaces)." : "",
    email: !validate.email && touched.email ? "Enter a valid email address." : "",
    password:
      !validate.password && touched.password
        ? "Password must be ≥8 chars with uppercase, lowercase, number and special character."
        : "",
  };

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleBlur = (e) => {
    setTouched((p) => ({ ...p, [e.target.name]: true }));
  };

  const isFormValid = validate.name && validate.email && validate.password;

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, password: true });

    if (!isFormValid) return;

    // Fake "submit" action: display success and reset form
    setSubmitted(true);
    setForm({ name: "", email: "", password: "" });
    setTouched({});
    // In real app, send data to server here
  };

  return (
    <div className="card">
      <h2>User Registration</h2>

      {submitted && <div className="success">Registration successful!</div>}

      <form onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your full name"
            autoComplete="name"
          />
          {errors.name && <small className="error">{errors.name}</small>}
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="you@example.com"
            autoComplete="email"
          />
          {errors.email && <small className="error">{errors.email}</small>}
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="At least 8 characters"
            autoComplete="new-password"
          />
          {errors.password && <small className="error">{errors.password}</small>}
        </div>

        <button type="submit" disabled={!isFormValid}>
          Register
        </button>
      </form>

      <div className="hint">
        <strong>Note:</strong> Submit button enabled only when all fields are valid.
      </div>
    </div>
  );
}
