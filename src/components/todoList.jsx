import Todo from './todo';
const TodoList = ({ todos, toggleCompleteTodo, deleteTodo }) => {
  return (
    <>
      {todos.map((todo, idx) => {
        return (
          <Todo
            key={idx}
            id={idx}
            isComplete={todo.isComplete}
            text={todo.text}
            deleteTodo={deleteTodo}
            toggleCompleteTodo={toggleCompleteTodo}
          />
        );
      })}
    </>
  );
};

export default TodoList;
