import React from 'react';

class NodeForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isAdd: false
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.handleAdd(this.refs.txt.value);
        this.refs.txt.value = '';
        this.toggleAdd();
    }

    toggleAdd(){
        this.state.isAdd = !this.state.isAdd;
        this.setState(this.state);
    }
  
    render(){
        if(this.state.isAdd){
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

module.exports = NodeForm;
