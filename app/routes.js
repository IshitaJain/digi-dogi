import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FilterableTable from './containers/FilterableTable';
import About from './components/About';
import HelloWorld from './components/basic/HelloWorld';
import AdminView from './components/basic/AdminView';
import EmployeeView from './components/basic/EmployeeView';

export default (
	<Switch>
		<Route exact path="/" component={FilterableTable} />
		<Route path="/about" component={About} />
		<Route path="/helloworld" component={HelloWorld} />
		<Route path="/adminview" component={AdminView} />
		<Route path="/employee/:employeeId" component={EmployeeView}/>
	</Switch>
);
