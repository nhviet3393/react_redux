import React from 'react';
import Node from './Node';
import NodeForm from './NodeForm';
import {connect} from 'react-redux';

class List extends React.Component{
    render(){
        return(
            <div>
                <NodeForm/>
                {this.props.mang.map((e, i) => <Node index={i} key={i}>{e}</Node>)}
            </div>
        )
    }
}

module.exports = connect(function(state){
    return {mang: state.mang}
})(List);
