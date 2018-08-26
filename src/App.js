import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { companyInfo: {}, employees: [] }
  }

  componentDidMount() {
    debugger;
    axios.get('http://localhost:8080/companyInfo').then(
      (data) => {
        this.setState({ companyInfo: data.companyInfo });
      }
    )
    axios.get('http://localhost:8080/employees').then(
      (data) => {
        this.setState({ employees: data.employees });
      }
    )
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default App;
