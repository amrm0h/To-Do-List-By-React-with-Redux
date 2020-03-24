import React from "react";
import { connect } from "react-redux";
import removeTodo from "../actions/Removetodo";




const Todo = (props) => (
    <div className="single_todo">
        <p>
            <input 
                type="checkbox" 
                className="unchecked"
                id={props.id}
                onClick={(e) => {
                    if (e.target.className === "unchecked") {
                        e.target.className = "checked";
                        } else {
                            e.target.className = "unchecked";
                        }
                    }}
                
            />
            <label
                htmlFor={props.id}
            >{props.todoText}</label>
        </p>
        <button
            onClick={() => {
                props.dispatch(removeTodo({id: props.id}));
            }}
        >remove</button>
    </div>
);

export default connect()(Todo);