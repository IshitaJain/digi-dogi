import React from 'react';
import { Link } from 'react-router-dom';
import { footer } from '../styles/footer.scss';
import Routes from '../routes';

const App = () =>
    <div>
        <h1>PayTm Test</h1>
        { Routes }
        <footer className={footer}>
            <Link to="/adminview">Admin View</Link>
            <Link to="/employee">Employee View</Link>
        </footer>
    </div>;

export default App;
