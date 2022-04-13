import './todoForm.css';
import { useState } from 'react';
const TodoForm = ({ addNewTodo, ...props }) => {
  const [todoValue, setTodoValue] = useState('');

  const addNewTodoHandler = (e) => {
    e.preventDefault();
    if (!todoValue) return;
    addNewTodo({ text: todoValue, isComplete: false });
  };

  return (
    <>
      <form onSubmit={addNewTodoHandler}>
        <input
          placeholder="Write New Todo..."
          type="text"
          onChange={(event) => setTodoValue(event.target.value)}
        ></input>
        <button className="formBtn" onClick={addNewTodoHandler}>
          Add
        </button>
      </form>
    </>
  );
};

export default TodoForm;
