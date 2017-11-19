import React from 'react';
import Node from './Node';
import NodeForm from './NodeForm';

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mang: ['Android', 'iOS', 'NodeJS']
        }
    }

    remove(index){
        this.state.mang.splice(index, 1);
        this.setState(this.state);
    }

    addNote(note){
        this.state.mang.push(note);
        this.setState(this.state);
    }

    render(){
        return(
            <div>
                <NodeForm handleAdd={this.addNote.bind(this)} />
                {this.state.mang.map((e, i) => <Node index={i} handleRemove={this.remove.bind(this)} key={i}>{e}</Node>)}
            </div>
        )
    }
}

module.exports = List;
