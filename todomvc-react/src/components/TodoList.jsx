import React from 'react';
import { connect } from 'react-redux';

const TodoList = ({todos,showDone,toggleTodoDone})=>(
    <ul>
        {todos
            .filter(todo=>!todo.done || showDone)
            .map((todo,i)=>(
            <li key={i}>
                {todo.text}
                <input type="checkbox" onChange={()=>toggleTodoDone(todo)} checked={todo.done}/>
            </li>
        ))}
    </ul>
);

const mapStateToProps = (state)=> ({
    todos: state.todos,
    showDone: state.showDone
});

const mapDispatchToProps = (dispatch)=>({
    toggleTodoDone(todo){
        const updated = {...todo,done:!todo.done};
        dispatch({type:"UPDATE_TODO",todo:updated});
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);