import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import getStore from './getStore';
import App from './components/App';
import main from './main.css';

//console.log("LOaded css...",main);

ReactDOM.render(
    <Provider store={getStore()}>
        <App />
    </Provider>,
    document.getElementById("app")
);
