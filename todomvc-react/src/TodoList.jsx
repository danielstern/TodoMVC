import React from 'react';
import { connect } from 'react-redux';

const TodoList = ({todos,showDone,toggleTodoDone})=>(
    <ul>
        {todos.map((todo,i)=>(
            <li key={i}>
                {todo.text}
                <input type="checkbox" onChange={()=>toggleTodoDone(i)}/>
            </li>
        ))}
    </ul>
);

const mapStateToProps = (state)=> ({
    todos: state.todos,
    showDone: state.showDone
});

const mapDispatchToProps = (dispatch)=>({
    toggleTodoDone(i){
        console.info(i);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);