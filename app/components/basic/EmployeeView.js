import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class EmployeeView extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            employeeId: this.props.match.params.employeeId
        };
    }

    render() {
        return (<div>
            <h1>Hello</h1>

        </div>);
    }
}

EmployeeView.propTypes = {
    match: PropTypes.any
};

const mapStateToProps = (state) => {
    return {
        employeesList: state.employeesList
    };
};
export default connect(mapStateToProps)(EmployeeView);
