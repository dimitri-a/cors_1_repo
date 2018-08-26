import React from 'react';
import PropTypes from 'prop-types'
import Employee from './Employee'

const List = ({ employees }) => {
    console.log(employees);
  const displayEmployees = (employees) ?
    (
      <div>
        <h3>Our Employees</h3>
        <hr />
        <div className="row">
        {
            employees.map
              (
              (emp, id) => (
                <Employee key={id} employee={emp}></Employee>
              )
              )
          }
        </div>
      </div>
    ) :
    (
      <span>no employees</span>
    )

  return (
    <div>
      {displayEmployees}
    </div>
  )
}

List.propTypes = {
  employees: PropTypes.array
}

export default List