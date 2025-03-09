import React from "react";
import Todo from "../App/Todo/Todo";
import useCreateTodo from "../hooks/useCreateTodo";

export default function TodoCreator() {
  const {error, isFired, createTodo} = useCreateTodo();
  return (
    <div className="container">
     <div className="container-fluid p-5">
     {isFired && !error && <div class="alert alert-success" role="alert">
        A simple success alert—check it out!
      </div>}
      {isFired && error && <div class="alert alert-danger" role="alert">
        {error?.message}
      </div>}
      <Todo createTodo={createTodo} />
     </div>
    </div>
  );
}
