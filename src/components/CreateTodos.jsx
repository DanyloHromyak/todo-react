import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CreateTodos = ({ handleFormSubmit }) => {
  // states
  const [todo, setTodo] = useState({
    id: uuidv4(),
    text: "",
    completed: false,
  });

  // functions
  const handleSubmit = e => {
    e.preventDefault();
    if (todo.text === "") return;
    handleFormSubmit(todo);
    setTodo({
      id: uuidv4(),
      text: "",
      completed: false,
    });
  };

  return (
    <form className="w-4/5 md:w-full mx-auto my-4" onSubmit={handleSubmit}>
      <input
        className="p-2 rounded-md w-full mb-4"
        type="text"
        autoFocus
        autoComplete="off"
        placeholder="Write Your New Todo"
        value={todo.text}
        onChange={e => {
          setTodo({
            ...todo,
            text: e.target.value,
          });
        }}
      />
      <button
        className="bg-black text-slate-50 hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200 font-medium text-base text-center rounded-md w-full p-2"
        type="submit">
        <FontAwesomeIcon icon={faPlus} className="mr-2" />
        Add New Todo
      </button>
    </form>
  );
};
export default CreateTodos;
