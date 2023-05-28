import AddForm from './components/AddForm';
import ListTodos from './components/ListTodos';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    axios
      .get('http://localhost:3030/todos')
      
      .then((res) =>
        dispatch({
          type: 'SET_TODOS',
          payload: res.data,
        })
      );
  }, []);

  return (
    <div className="App">
      <AddForm />
      <ListTodos />
    </div>
  );
}

export default App;