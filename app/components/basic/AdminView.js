import React from 'react';
import Employee from '../model/Employee';
import EmployeeView from 'EmployeeView'
import { Link } from 'react-router-dom';

const employeesData = ['Jennifer', 'John'];

export default class AdminView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: null
        };
    }

    componentWillMount() {

        this.constructEmployeesList(employeesData);
    }

    constructEmployeesList(employeesData) {
        const employeesList = [];
        employeesData.map((emp, index) => {
            employeesList.push(new Employee(index, emp));
        });
        this.setState({
            employees: employeesList
        });
    }

    render() {
        return (<div>
            <h1>Admin View</h1>
            <h3>Employees List:</h3>
            {this.state.employees.map((emp) => {
                return (
                    <div id={emp.id} key={emp.id}>
                        <Link to={'/employee/' + emp.id} param={emp}>{emp.name}</Link>
                    </div>
                );
            })}
        </div>);
    }
}
