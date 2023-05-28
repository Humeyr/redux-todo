
const initialState = {
    todos:[],
};

const todoReducer = (state=initialState, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return{
                todos:[...state.todos,action.payload],
            };
        case 'DEL_TODO':
         const filtredTodos= state.todos.filter((item)=>item.id !== action.payload);
         return{
            todos: filtredTodos
         }
        case 'EDIT_TODO':
         const cloneTodos =[...state.todos];
         const index = state.todos.findIndex((item)=>item.id === action.payload);
         const updatedItem = {...state.todos[index], isDone:!state.todos[index].isDone};
         cloneTodos.splice(index, 1,updatedItem);
         return {
            todos:cloneTodos
         };
         case 'CLEAR':
            return{
                todos:[],
            };
         case 'SET_TODOS':
            return{
                todos:action.payload
            };
        default:
            return state;
    }
    
};

export default todoReducer;