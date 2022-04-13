import TodoList from './todoList';
import { useState } from 'react';
import TodoForm from './todoForm';
import '../components/myTodos.css';

function MyTodos() {
  const [todos, setTodos] = useState([]);

  // adding a todo
  const addNewTodo = (todo) => {
    const newTodos = [...todos];
    newTodos.push(todo);
    setTodos(newTodos);
  };
  // deleting a todo
  const deleteTodo = (id) => {
    const newTodos = [...todos];
    newTodos.splice(id, 1);
    console.log(newTodos);
    setTodos(newTodos);
  };
  // toggling a todo for complete or !complete
  const ToggleComplete = (id) => {
    const newTodos = [...todos];
    newTodos[id].isComplete = !newTodos[id].isComplete;
    setTodos(newTodos);
  };
  return (
    <>
      <div className="todo-container">
        <h1 className="todo-headline">my Todos : </h1>
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleCompleteTodo={ToggleComplete}
        />
        <TodoForm addNewTodo={addNewTodo} />
      </div>
    </>
  );
}

export default MyTodos;
