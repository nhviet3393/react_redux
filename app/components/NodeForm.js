import React from 'react';
import {connect} from 'react-redux';

class NodeForm extends React.Component{
    handleSubmit(e){
        e.preventDefault();
        var {dispatch} = this.props;
        dispatch({type: 'ADD_NODE', node: this.refs.txt.value});
        dispatch({type: 'TOGGLE_IS_ADD'});
    }

    toggleAdd(){
        var {dispatch} = this.props;
        dispatch({type: 'TOGGLE_IS_ADD'});
    }
  
    render(){
        if(this.props.isAdd){
            return(
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="txt" placeholder="Enter your note!" />
                    <br/><br/>
                    <button>Add</button>
                </form>
            )
        }
        else{
            return(
                <button onClick={this.toggleAdd.bind(this)}>+</button>
            )
        }
    }
}

module.exports = connect(function(state){
    return {isAdd: state.isAdd}
})(NodeForm);
