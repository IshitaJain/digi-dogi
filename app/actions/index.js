import * as types from './types';

export function filterTable(filter) {
    return {
        type: types.FILTER,
        filter
    };
}

export function saveEmployees(employees) {
    return {
        type: 'SAVE_EMPLOYEES',
        employeesList: employees
    };
}
