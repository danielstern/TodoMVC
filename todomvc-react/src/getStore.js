import guid from 'guid';
import { createStore } from 'redux';

const defaultState = {
    showDone: true,
    todos:[{
        id:guid.raw(),
        text:"Collect wood",
        done:false
    },{
        id:guid.raw(),
        text:"Invent the pickaxe",
        done: true,
    },{
        id:guid.raw(),
        text:"Explore cave",
        done: false
    }]
};

const reducer = (state = defaultState,action)=>{
    const { type, todo, showDone } = action;
    if (type === `SUBMIT_TODO`) {
        state = {
            ... state,
            todos: [...state.todos,todo]
        }
    }

    if (type === `UPDATE_TODO`) {
        state = {
            ...state,
            todos:state.todos.map(_todo=>_todo.id === todo.id ? todo : _todo)
        }
    }

    if (type === `SET_SHOW_DONE`) {
        state = {
            ...state,
            showDone
        }
    };

    return state;
};

export default ()=>createStore(reducer);