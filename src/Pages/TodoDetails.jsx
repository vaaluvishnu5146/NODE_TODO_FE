import React, { useEffect } from "react";
import useFetchTodoById from "../hooks/useFetchTodoById";
import { useParams } from "react-router";
import Loader from "../Components/Loader";

export default function TodoDetails() {
  const { todoId } = useParams();
  const { todo, loading, error, fetchTodoById } = useFetchTodoById();

  useEffect(() => {
    if (todoId) {
      fetchTodoById(todoId);
    } else {
      alert("Todo Id is missing");
    }
  }, [todoId]);

  return (
    <div className="container">
      {error && (
        <div class="alert alert-danger" role="alert">
          {error?.message}
        </div>
      )}
      {loading ? (
        <Loader />
      ) : (
        <div className="container-fluid">
          <h1>{todo?.title}</h1>
          <p>{todo?.description}</p>
        </div>
      )}
    </div>
  );
}
