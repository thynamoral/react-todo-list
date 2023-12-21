import { useState } from "react";
// components
import FormInput from "components/FormInput/FormInput";
import TodoList from "components/TodoList/TodoList";
// css files
import "src/App.css";
import "components/FormInput/FormInput.css";
import "components/List/List.css";
import "components/TodoList/TodoList.css";

function App() {
  // todo list state
  const [todoList, setTodoList] = useState([]);
  // add a new todo list
  const addNewTodoList = (newTodo) => {
    setTodoList((prevTodoList) => {
      return [...prevTodoList, newTodo];
    });
  };
  return (
    <div className="app">
      <header>
        <h1 className="header-title">TODO LIST</h1>
        <FormInput addNewTodoList={addNewTodoList} />
      </header>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
