import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const SingleTodo = ({todo}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    axios.delete(`http://localhost:3030/todos/${todo.id}`)
    .then(()=>
   { dispatch({
      type:"DEL_TODO",
      payload: todo.id
    });
  });
    
  };

  const handleEdit = () =>{
    const updatedTodo = {...todo, isDone:!todo.isDone};
    axios.put(`http://localhost:3030/todos/${todo.id}`, updatedTodo).then(()=>{
      dispatch({
        type:'EDIT_TODO',
        payload: todo.id
      });
    }); 
  };
  
  return (
    <div className="card" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">{todo.text}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{todo.isDone ? 'Tamamlandi' : 'Devam Ediyor'}</h6>
    <p className="card-text">{new Date(todo.date).toLocaleDateString()}</p>
    <a className="card-link"onClick={handleEdit} >
      {todo.isDone ? 'Geri Al' : 'Tamamla'}</a>
    <a href="#" className="card-link" onClick={handleDelete}>Sil</a>
  </div>
</div>
  )
}

export default SingleTodo
