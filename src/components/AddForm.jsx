import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddForm = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const handleSubmit = (e) => {
        e. preventDefault();
        const newTodo = {
            id:new Date().getTime(),
            text,
            isDone: false,
            date: new Date(),
        };

        axios.post('http://localhost:3030/todos', newTodo);

        dispatch({
          type: 'ADD_TODO',
          payload: newTodo,
        });

        setText(" ")
           
    };

    
  return (
    <form onSubmit={handleSubmit} className='d-flex justify-content-center my-4 px-5'>
        <input  value={text} className='form-control' type='text' onChange={(e)=> setText(e.target.value)}/>
        <button className='btn btn-primary' >Ekle</button>
      
    </form>
  )
}

export default AddForm
