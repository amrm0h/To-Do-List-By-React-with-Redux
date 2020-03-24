import uuid from "uuid";

const addTodo = ( {name = ""} ) => {
    return {
        type: "ADD_TODO",
        todo: {
            name,
            id: uuid(),
            c: "unchecked"
        }
    };
}

export default addTodo;
