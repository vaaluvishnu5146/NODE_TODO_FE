import React from "react";
import TodoCreator from "./Pages/TodoCreator"
import TodoDetails from "./Pages/TodoDetails"
import { Routes, Route } from 'react-router';
import Navbar from "./Components/Navbar";
import TodoLists from "./Pages/TodoLists";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <React.Fragment>
          <Route path="/" Component={() => <TodoCreator />} />
          <Route path="/todos" Component={() => <TodoLists />} />
          <Route path="/todo/:todoId" Component={() => <TodoDetails />} />
        </React.Fragment>
      </Routes>
    </div>
  )
}

export default App
