import React from "react";
import { connect } from "react-redux";


import addTodo from "../actions/AddTodo";



class Form extends React.Component {

    state = {
        error: undefined
    };
    

    handleOnSubmit = (e) => {

        e.preventDefault();

        const  inputValue = e.target.elements.todoname.value.trim();

        const nameValuesArray = this.props.todos.map((todo) => todo.name);


        if ( inputValue === "" ) {
            this.setState(() => ({ error: "Please Write A valid 'TODO' to add!!!" }));

        } else if  ( nameValuesArray.indexOf(inputValue) > -1 ) {
    
            this.setState(() => ({ error: "This Todo Already Exist !!!" }));

        } else {

            this.setState(() => ({ error: "" }));
            this.props.dispatch(addTodo({name: inputValue}))
            e.target.elements.todoname.value = "";
        }

    };


    render() {

        return (
            <div className="form_container">
                {this.state.error && <p className="error_message">{this.state.error}</p>}
                <form autoComplete="off" onSubmit={this.handleOnSubmit}>
                    <input 
                        type="text"
                        name="todoname"
                        placeholder="Write Some to do ..."
                    />
                    <button>Add</button>
                </form>
            </div>
        )
    };
};


const mapStateToProps = state => {

    return {
        todos: state
    }

};




export default connect(mapStateToProps)(Form);