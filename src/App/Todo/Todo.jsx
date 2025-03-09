import React, { useState } from 'react'
import TextInput from '../../Components/TextInput'
import ButtonC from '../../Components/Button'
import ListTodo from '../../Components/ListTodo';
import TextArea from '../../Components/TextArea';

export default function Todo({ createTodo = () => {} }) {
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
        setTitle("")
        setDescription("")
      }
    }
  }
  
  return (
    <div>
        <TextInput label={"Enter Title"} id={"title"} placeholder={"Enter task title..."} value={title} onChange={handleTitleChange} />
        <TextArea label={"Enter Description"} id={"description"} placeholder={"Enter task description..."} value={description} onChange={handleDescriptionChange} />
        <ButtonC label='Submit' onClick={saveTodo} />
    </div>
  )
}
