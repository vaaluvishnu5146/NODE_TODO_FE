import React, { useEffect, useState } from 'react'

export default function useTodos() {
  const [isLoading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);

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

    return {isLoading, todos, error}
}