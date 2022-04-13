import './todo.css';
import btnIcon from './../images/x-icon 1_2022-04-13/x-icon 1.png';
const Todo = ({
  id,
  text,
  isComplete,
  deleteTodo,
  toggleCompleteTodo,
  ...props
}) => {
  const deleteTodoHandler = (event) => {
    event.stopPropagation();
    deleteTodo(id);
  };
  const toggleCompleteHandler = (event) => {
    toggleCompleteTodo(id);
  };
  return (
    <div className={isComplete ? 'completed' : ''}>
      <p className="todo">
        <input type="checkbox" onClick={toggleCompleteHandler} />
        <span className="todo-text">{text}</span>{' '}
        <img src={btnIcon} className="todoBtn" onClick={deleteTodoHandler} />
      </p>
    </div>
  );
};

export default Todo;
