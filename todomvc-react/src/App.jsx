import React from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
const App = ({todos,showDone})=>(
    <div>
        <h1>
            React v16.1.1 TodoMVC
        </h1>
        <TodoList/>

    </div>
);

export default App;