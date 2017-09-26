// import { routerReducer as routing } from 'react-router-redux';
// import { combineReducers } from 'redux';
// import * as types from '../actions/types';

export const initialState = {
    employeesList: null
};

const copyObject = (obj) => Object.assign({}, obj);

const actionsMap = {
    'SAVE_EMPLOYEES': (state, action) => {
        const stateCopy = copyObject(state);
        stateCopy.employeesList = action.employeesList;
        console.log(stateCopy);
        return stateCopy;
    }
};

export default function reducer(state = initialState, action = {}) {
    const fn = actionsMap[action.type];
    return fn ? fn(state, action) : state;
}
