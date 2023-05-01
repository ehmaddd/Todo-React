import TodoItem from "./TodoItem";
import InputTodo from './InputTodo';

const TodosList = ({ todosProps, handleChange, delTodo }) => {
  const addTodoItem = (title) => {
    // update state with user's input
  };

  return (
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
};
export default TodosList;
