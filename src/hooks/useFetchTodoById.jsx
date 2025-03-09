import React, { useState } from 'react'

export default function useTodoById() {
    const [todo, setTodo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    function fetchTodoById(id) {
        setLoading(true);
        setError(null);
        fetch(`https://simpletodos-v1.onrender.com/todos/todo/${id}`)
        .then((response) => response.json())
        .then((result) => {
            if(result) {
                setTodo(result.todo)
            }
        })
        .catch((error) => {
            setError(error)
        })
        .finally(() => {
            setLoading(false);
        })
    }

  return { todo, loading, error, fetchTodoById };
}
