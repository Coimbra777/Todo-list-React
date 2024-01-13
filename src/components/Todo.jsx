import PropTypes from 'prop-types';

const Todo = ({ todo, removeTodos, completeTodo }) => {
  return (
    <div>
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        <div className="content">
          <p>{todo.text}</p>
          <p>({todo.category})</p>
        </div>
        <div>
          <button className="complete" onClick={() => completeTodo(todo.id)}>
            Completar
          </button>
          <button className="remove" onClick={() => removeTodos(todo.id)}>
            x
          </button>
        </div>
      </div>
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.string.isRequired, 
  removeTodos: PropTypes.string.isRequired, 
  completeTodo: PropTypes.string.isRequired, 

};

export default Todo;
