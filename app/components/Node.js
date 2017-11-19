import React from 'react';
import {connect} from 'react-redux';

class Node extends React.Component{

    removeNote(){
        var {index, dispatch} = this.props;
        dispatch({type: 'DELETE', index});
    }

  render(){
    return(
        <div>
            <p>{this.props.children}</p>
            <button onClick={this.removeNote.bind(this)}>Delete</button>
        </div>
    )
  }
}

module.exports = connect()(Node);
