import React from 'react';
import Employee from '../model/Employee';

export default class EmployeeView extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            employeeId: props.match.params.employeeId
        };
    }

    componentWillMount() {
        const employeesData = ['Jennifer', 'John'];
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
            <h1>Hello</h1>

        </div>);
    }
}
