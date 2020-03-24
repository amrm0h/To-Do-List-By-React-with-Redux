import React from "react";
import Todo from "./Todo";

import { connect } from "react-redux";

const TodoList = (props) => (
    <div className="list_container">
        <h3>Your Todos: <span>{props.todos.length}</span></h3>

        {props.todos.length === 0 && <p className="no_todo">You have No TO-DOs Yet.</p>}
        


        
        {
            props.todos.map((todo) => 
            
            <Todo 
                key={todo.id}
                todoText={todo.name}
                todos={props.todos}
                id={todo.id}
            />
            
            )
        }
    </div>
);

const mapStateToProps = (state) => ({ todos: state });

export default connect(mapStateToProps)(TodoList);