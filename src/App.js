import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import List from './components/List';

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
      <div className='container'>
        {/* <Header companyInfo={this.state.companyInfo}  /> */}
        <List employees={this.state.employees} />
      </div>
    );
  }
}

export default App;
