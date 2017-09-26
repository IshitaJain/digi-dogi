import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class EmployeeView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeId: this.props.match.params.employeeId,
            employee: null
        };
    }

    componentWillMount() {
        let employee = null;
        this.props.employeesList.map((emp) => {
            if (emp.id == this.state.employeeId) {
                employee = emp;
            }
        });

        this.setState({
            employee: employee
        });
    }

    render() {
        return (<div>
            <h1>Hello {this.state.employee.name}</h1>

        </div>);
    }
}

EmployeeView.propTypes = {
    match: PropTypes.any,
    employeesList: PropTypes.array
};

const mapStateToProps = (state) => {
    return {
        employeesList: state.employeesList
    };
};
export default connect(mapStateToProps)(EmployeeView);
