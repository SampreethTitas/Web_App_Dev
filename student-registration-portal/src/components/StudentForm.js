import React, { Component } from "react";

class StudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      branch: "",
      semester: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddStudent(this.state);

    this.setState({
      name: "",
      branch: "",
      semester: "",
    });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={this.state.name}
          onChange={this.handleChange}
          required
        />

        <input
          type="text"
          name="branch"
          placeholder="Branch"
          value={this.state.branch}
          onChange={this.handleChange}
          required
        />

        <input
          type="number"
          name="semester"
          placeholder="Semester"
          value={this.state.semester}
          onChange={this.handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    );
  }
}

export default StudentForm;
