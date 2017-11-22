import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import getStore from './getStore';
import App from './components/App';

ReactDOM.render(
    <Provider store={getStore()}>
        <App />
    </Provider>,
    document.getElementById("app")
);
