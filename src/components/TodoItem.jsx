import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";

const TodoItem = ({
  todo,
  handleToggleComplete,
  handleDeleteTodo,
  handleEditTodo,
}) => {
  // states and refs
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);
  const inputRef = useRef(null);

  // functions
  const handleEditInputChange = event => {
    setEditValue(event.target.value);
  };

  const handleEditFormSubmit = (event, id) => {
    event.preventDefault();
    handleEditTodo(id, editValue);
    setIsEditing(false);
  };

  const handleEditButton = () => {
    setIsEditing(true);
    setEditValue(todo.text);
    inputRef.current.focus();
    inputRef.current.setSelectionRange(editValue.length, editValue.length);
    // focuses on the end of the input 👆 P.S. Copilot is OP 
  };

  return (
    <li className="flex justify-between items-center p-2 bg-white dark:bg-gray-800 rounded-md shadow-md mb-2">
      <textarea
        type="text"
        ref={inputRef}
        className={`w-full resize-none rounded-md p-1 mr-2 bg-slate-50 dark:bg-slate-700 dark:text-white border border-black dark:border-none focus:outline-none ${
          todo.completed
            ? "line-through text-gray-400"
            : "text-black"
        }`}
        value={isEditing ? editValue : todo.text}
        readOnly={!isEditing}
        onChange={handleEditInputChange}
        onClick={() => {
          if (isEditing) return;
          handleToggleComplete(todo.id);
        }}
      />
      <div className="flex gap-2">
        {isEditing ? (
          <button className="bg-white rounded-md w-8 h-8 border border-black dark:border-white" onClick={event => handleEditFormSubmit(event, todo.id)}>
            <FontAwesomeIcon icon={faCheck} />
          </button>
        ) : (
          <button
            className="bg-white rounded-md w-8 h-8 border border-black dark:border-white"
            onClick={handleEditButton}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
        )}
        <button
          className="bg-white hover:bg-red-500  rounded-md w-8 h-8 border border-black hover:border-red dark:border-white"
          onClick={() => handleDeleteTodo(todo.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
