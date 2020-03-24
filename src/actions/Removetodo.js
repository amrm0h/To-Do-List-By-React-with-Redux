
const removeTodo = ({id}) => {
    return {
        type: "REMOVE_TODO",
        id
    };
};

export default removeTodo;
