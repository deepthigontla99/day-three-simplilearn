import React, { Component } from "react";
import axios from "axios";

export class Employees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
  }

  componentDidMount() {
    axios
      .get(`https://json`)
      .then((result) => {
        this.setState({ employees: result.data });
        console.log(this.state.employees);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h2>Employees Component</h2>
        <br />
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Salary</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((employee, index) => {
              return (
                <tr key={index}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.salary}</td>
                  <td>{employee.designation}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
