/* eslint-disable react/prop-types */
import TodoItem from './TodoItem';

const TodosList = ({ todosProps, handleChange, delTodo }) => (
  <div>
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProp={todo}
          handleChange={handleChange}
          delTodo={delTodo}
        />
      ))}
    </ul>
  </div>
);

export default TodosList;
