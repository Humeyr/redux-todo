import React from 'react';
import { useSelector } from 'react-redux';
import SingleTodo from './singleTodo';
import { useDispatch } from 'react-redux';

const ListTodos = () => {
    const dispatch = useDispatch();
    const {todoState} = useSelector((state)=>state);

    const handleClear = () => {
      dispatch({
        type: 'CLEAR'
      });
    };
    
  return (
    <div className='row justify-content-center justify-content-md-between gap-5 p-4'>
      <div className='d-flex justify-content-start'>
        {todoState.todos.length > 0 ? (
          <button className='btn btn-danger btn-sm' onClick={handleClear}>Tumunu Sil</button>
        ) : (
          "*Liste Bos"
        )}
      </div>
      {todoState.todos.map((todo)=>(
        <SingleTodo todo={todo} />))}
    </div>
  )
}

export default ListTodos
