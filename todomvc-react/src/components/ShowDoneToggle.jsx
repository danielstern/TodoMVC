import React from 'react';
import { connect } from 'react-redux';

const ShowDoneToggle = ({showDone,handleChangeShowDone})=>(
    <div className="show-complete">
        <label>
            Show completed items?
            <input type="checkbox" checked={showDone} onChange={handleChangeShowDone}/>
        </label>

    </div>
);

const mapStateToProps = ({showDone})=>({showDone});

const mapDispatchToProps = (dispatch)=>({
    handleChangeShowDone(e){
        console.log(e.target.value);
        dispatch({type:"SET_SHOW_DONE",showDone:e.target.checked});
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowDoneToggle);