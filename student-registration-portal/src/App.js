import React, { Component } from "react";
import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  addStudent = (student) => {
    this.setState({
      students: [...this.state.students, student],
    });
  };

  render() {
    return (
      <div className="container">
        <h1>🎓 Student Registration Portal</h1>
        <StudentForm onAddStudent={this.addStudent} />
        <StudentList students={this.state.students} />
      </div>
    );
  }
}

export default App;
