import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import TodoList from "./components/TodoList";
import CreateTodos from "./components/CreateTodos";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  // states
  const [darkMode, setDarkMode] = useState(() => {
    const isDarkMode = JSON.parse(localStorage.getItem("theme"));
    return isDarkMode || false;
  });
  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    return storedTodos || [];
  })

  const [searchQuery, setSearchQuery] = useState("");

  // functions
  const switchThemes = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("isDarkMode", darkMode);
  };
  const completedTasks = todos.filter(todo => todo.completed).length;
  const pendingTasks = todos.filter(todo => !todo.completed).length;
  const handleFormSubmit = todo => {
    setTodos([...todos, todo]);
  };

  const handleEditTodo = (id, newValue) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: newValue };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleToggleComplete = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const handleSearch = query => {
    setSearchQuery(query);
  };

  const filteredTodos = todos.filter(todo => {
    return todo.text.toLowerCase().includes(searchQuery.toLowerCase());
  });

  useEffect(() => {
    console.log("Retrieving todos from localStorage...", localStorage.getItem("todos", "isDarkMode"));
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    const isDarkMode = JSON.parse(localStorage.getItem("isDarkMode"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
    if (isDarkMode) {
      setDarkMode(isDarkMode);
    }
  }, []);

  useEffect(() => {
    console.log("Saving todos to localStorage...");
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("isDarkMode", JSON.stringify(darkMode));
  }, [todos, darkMode]);

  return (
    <div className={`${darkMode ? "dark" : ""} bg-slate-200 dark:bg-black min-h-screen flex justify-center items-center flex-col md:px-3`}>
      <Header switchThemes={switchThemes} darkMode={darkMode} />
      <main className="flex flex-col items-center justify-center max-w-3xl w-full">
        <Searchbar handleSearch={handleSearch} />
        <TodoList
          todos={filteredTodos}
          handleDeleteTodo={handleDeleteTodo}
          handleEditTodo={handleEditTodo}
          handleToggleComplete={handleToggleComplete}
        />
        <CreateTodos handleFormSubmit={handleFormSubmit} />
      </main>
      <Footer completedTasks={completedTasks} pendingTasks={pendingTasks} />
    </div>
  );
}

export default App;
