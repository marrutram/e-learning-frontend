import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Gprov } from "./context";

import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styles/scss/sb-admin-2.scss';
import './index.css'
import { Provider } from 'react-redux';
import { Store } from './redux/store';

ReactDOM.render(
<Provider store={Store}>
    <Gprov>
        <App />
    </Gprov>
</Provider> , document.getElementById('root'));