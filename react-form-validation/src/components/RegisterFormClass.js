import React, { Component } from "react";
import "./RegisterForm.css";

const nameRegex = /^[A-Za-z\s]{2,50}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;

class RegisterFormClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      touched: {},
      submitted: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, submitted: false });
  };

  handleBlur = (e) => {
    this.setState({ touched: { ...this.state.touched, [e.target.name]: true } });
  };

  validateField = () => ({
    name: nameRegex.test(this.state.name),
    email: emailRegex.test(this.state.email),
    password: passwordRegex.test(this.state.password),
  });

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ touched: { name: true, email: true, password: true } });

    const valid = this.validateField();
    if (valid.name && valid.email && valid.password) {
      this.setState({ submitted: true, name: "", email: "", password: "", touched: {} });
    }
  };

  render() {
    const valid = this.validateField();
    const errors = {
      name: !valid.name && this.state.touched.name ? "Name should be 2-50 letters (only letters & spaces)." : "",
      email: !valid.email && this.state.touched.email ? "Enter a valid email address." : "",
      password: !valid.password && this.state.touched.password ? "Password must be ≥8 chars with uppercase, lowercase, number and special char." : ""
    };

    const isFormValid = valid.name && valid.email && valid.password;

    return (
      <div className="card">
        <h2>User Registration</h2>
        {this.state.submitted && <div className="success">Registration successful!</div>}
        <form onSubmit={this.handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" value={this.state.name} onChange={this.handleChange} onBlur={this.handleBlur} placeholder="Your full name"/>
            {errors.name && <small className="error">{errors.name}</small>}
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" value={this.state.email} onChange={this.handleChange} onBlur={this.handleBlur} placeholder="you@example.com"/>
            {errors.email && <small className="error">{errors.email}</small>}
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange} onBlur={this.handleBlur} placeholder="At least 8 characters"/>
            {errors.password && <small className="error">{errors.password}</small>}
          </div>

          <button type="submit" disabled={!isFormValid}>Register</button>
        </form>
        <div className="hint"><strong>Note:</strong> Submit enabled only when all fields valid.</div>
      </div>
    );
  }
}

export default RegisterFormClass;
