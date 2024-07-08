import React, { useRef } from 'react';
import { useState } from 'react';

function AddToDoPge() {
  const[todos,setTodos]=useState([]);
  const inputRef=useRef()
  const handleAddTodo=()=>{
    const text=inputRef.current.value;
    setTodos([...todos,text])
    inputRef.current.value='';
  }
  return (
    <div className='AddToDoPge'>
      <h1> Add New To Do Item</h1>
      <div className='todo-container'>
      <ul>
        {todos.map((item)=>{
          return<li>{item}</li>;})}
      </ul>
      <input ref={inputRef} placeholder='enter your list..'/>
      <button onClick={handleAddTodo}>add</button>
    </div>
    </div>
  )
}

export default AddToDoPge