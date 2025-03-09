import React from "react";
import useFetchTodos from "../hooks/useFetchTodos";
import ListTodo from "../Components/ListTodo";
import Loader from "../Components/Loader";

export default function TodoLists() {
  const {isLoading, todos, error} = useFetchTodos();
  return (
    <div className="container">
      <div className="container-fluid">
      {isLoading ? <Loader /> : <ListTodo data={todos} />}
      <p>{error}</p>
      </div>
    </div>
  );
}
