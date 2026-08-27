import type { Todo } from "./type";

const TodoData = async ({todosPromise}: {todosPromise: Promise<Todo[]>}) => {
    const todos = await todosPromise;

    console.log(todos);

    return (
        <div>
            todos: {todos.length}
            {
                todos.slice(0, 5).map(todo => 
                    <div style={{ border: todo.completed ? '1px solid green' : '1px solid red', margin: '10px 0', padding: '10px'}}>
                        <p key={todo.id}>{todo.title}</p>
                    </div>
                )
            }
        </div>
    );
};

export default TodoData;