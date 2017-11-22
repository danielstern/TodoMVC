import React from 'react';
import { connect } from 'react-redux';
import guid from 'guid';

const TodoInputComponent = ({handleSubmitInput})=>(
    <div>
        <form onSubmit={handleSubmitInput}>
            <input type="text" placeholder="Add a new todo item"/>
        </form>
    </div>
);

const mapDispatchToProps = (dispatch)=>({
    handleSubmitInput(e){
        e.preventDefault();
        let input = e.target.elements[0];
        let todo = {id:guid.raw(),text:input.value,done:false};
        dispatch({type:"SUBMIT_TODO",todo});
        input.value = "";
    }
});

export default connect(null,mapDispatchToProps)(TodoInputComponent);