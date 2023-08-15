import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  handleToggleComplete,
  handleDeleteTodo,
  handleEditTodo,
}) => {
  console.log("TodoList props:", todos);
  return (
    <ul className="w-4/5 md:w-full mx-auto">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleToggleComplete={handleToggleComplete}
          handleDeleteTodo={handleDeleteTodo}
          handleEditTodo={handleEditTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
