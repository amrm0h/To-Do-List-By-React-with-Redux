import { createStore  } from "redux";

// generate random id for every todo
import uuid from "uuid";

// initial state
const initTodoList = [
    {name: "go shopping", id: uuid()},
    {name: "play football", id: uuid()}
];


// the incompleted todos function reducer
const todos = (state = initTodoList, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return [...state,
                action.todo
            ];
        case "REMOVE_TODO":
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state;
    }

};

const store = createStore(todos,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;