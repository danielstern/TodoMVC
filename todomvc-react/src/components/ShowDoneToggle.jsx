import React from 'react';
import { connect } from 'react-redux';

const ShowDoneToggle = ({showDone,handleChangeShowDone})=>(
    <div className="show-completed">
        <label>
            Show completed items?
            <input type="checkbox" checked={showDone} onChange={handleChangeShowDone}/>
        </label>

    </div>
);

const mapStateToProps = ({showDone})=>({showDone});

const mapDispatchToProps = (dispatch)=>({
    handleChangeShowDone(e){
        dispatch({type:"SET_SHOW_DONE",showDone:e.target.checked});
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowDoneToggle);