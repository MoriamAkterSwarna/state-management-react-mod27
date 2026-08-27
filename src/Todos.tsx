import { Suspense } from "react";
import type { Todo } from "./type";
import TodoData from "./TodoData";
    
const fetchTodos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    return data;
}
const Todos = () => {

    const todosPromise: Promise<Todo[]> = fetchTodos();
    return (
        <Suspense fallback={<h2>Todo is Loading...</h2>}>
            <TodoData todosPromise={todosPromise} />
        </Suspense>
    );
};

export default Todos;