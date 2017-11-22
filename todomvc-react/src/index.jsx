console.info("BWOP BWOP BWOP???");
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
    showDone: true,
    todos:[{
        text:"Collect wood",
        done:false
    },{
        text:"Build pickaxe",
        done: true,
    }]
};
const reducer = (state = defaultState,action)=>{
    return state;
};

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,document.getElementById("app"));
