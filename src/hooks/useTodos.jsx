import React, { useEffect, useState } from 'react'

export default function useTodos() {
    const [isLoading, setLoading] = useState(false);
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchTodos();
      }, []);
    
      function fetchTodos() {
        setLoading(true);
        fetch('https://simpletodos-v1.onrender.com/todos/')
        .then((response) => response.json())
        .then((result) => {
        setLoading(false)
          if(result && result.data) {
            setTodos(result.data)
          }
        })
        .catch((error) => {
            setLoading(false);
            setError(error)
        })
      }
    
      function createTodo(title, description) {
          fetch('https://simpletodos-v1.onrender.com/todos/createTodo', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              title,
              description
            })
          })
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            fetchTodos();
          })
          .catch((error) => {
            console.log(error)
          })
      }

    return [isLoading, todos, error, createTodo]
}
