import React, { useState } from 'react'
import TextInput from '../../Components/TextInput'
import ButtonC from '../../Components/Button'
import ListTodo from '../../Components/ListTodo';
import useTodos from '../../hooks/useTodos';

export default function Todo() {
  const [isLoading, todos, error, createTodo] = useTodos();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  function handleTitleChange(e) {
    if(e) {
        setTitle(e.target.value)
    }
  }

  function handleDescriptionChange(e) {
    if(e) {
        setDescription(e.target.value)
    }
  }

  function saveTodo(e) {
    if(e) {
      if(!title || !description) {
        alert("Data is insufficient")
      } else {
        createTodo(title, description);
      }
    }
  }
  
  return (
    <div>
        <TextInput label={"Enter Title"} id={"title"} placeholder={"Enter task title..."} value={title} onChange={handleTitleChange} />
        <TextInput label={"Enter Description"} id={"description"} placeholder={"Enter task description..."} value={description} onChange={handleDescriptionChange} />
        <ButtonC label='Submit' onClick={saveTodo} />
        {isLoading ? <p>Data is loading</p> : <ListTodo data={todos} />}
        <p>{error}</p>
    </div>
  )
}
