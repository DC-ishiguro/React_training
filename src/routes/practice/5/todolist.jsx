import TodoItem from "./todoitem";

const TodoList = (props) => {

    return(
        <ul>
            {props.tasks.map((task, index) => (
                <TodoItem key={index} task={task} />
            ))}
        </ul>
    )
}

export default TodoList;