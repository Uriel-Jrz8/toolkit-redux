import { useState } from "react";
import { useGetTodoIDQuery, useGetTodosQuery } from "./api/todosApi"


export const TodoApp = () => {

    const [todonew, settodonew] = useState(1);
    //const { data: todos = [], isLoading } = useGetTodosQuery(); primero ejemplo de RKT query consumiendo un API
    const { data: todo, isLoading } = useGetTodoIDQuery(todonew);
    
    

    const nextTodo = () =>{

        settodonew (todonew + 1);
    }


    return (
        <>
            <h1>Aplicacion con RTK Query de Redux </h1>
            <hr />
            <h4>is Loading..... { isLoading ? 'True' : 'false' }</h4>
            <pre> { JSON.stringify( todo )} </pre>
{/*             <ul>
                {
                    todos.map(todo => (
                        <li key={ todo.id }>
                            { todo.title }
                        </li>
                    ))
                }
            </ul> */}
            <button onClick = {nextTodo}>next todo</button>
        </>
    )                   
}
