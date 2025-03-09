import React, { useState } from "react";

export default function useCreateTodo() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFired, setFired] = useState(false);

  function createTodo(title, description) {
    setFired(true);
    setError(null);
    fetch("https://simpletodos-v1.onrender.com/todos/createTodo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
      }),
    })
      .then((response) => response.json())
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return { loading, error, isFired, createTodo };
}
