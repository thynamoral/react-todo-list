import { useEffect, useState } from "react";
// components
import FormInput from "components/FormInput/FormInput";
import TodoList from "components/TodoList/TodoList";
// css files
import "src/App.css";
import "components/FormInput/FormInput.css";
import "components/Task/Task.css";
import "components/TodoList/TodoList.css";
import "components/FunctionalButton/FunctionalButton.css";
import "components/EditableTask/EditableTask.css";

function App() {
  // todo list state
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );

  // update localStorage
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  // add a new task
  const addNewTodoList = (newTodo) => {
    setTodoList((prevTodoList) => {
      return [...prevTodoList, newTodo];
    });
  };

  // delete a task
  const deleteTask = (taskId) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.filter((task) => {
        return task.id !== taskId;
      });
    });
  };

  // mark task as done
  const markTaskAsFinished = (taskId) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.map((task) => {
        return task.id === taskId
          ? {
              ...task,
              isCompleted: !task.isCompleted,
            }
          : task;
      });
    });
  };

  // edit a task
  const editTask = (taskId, editedTask) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.map((task) => {
        return task.id === taskId
          ? {
              ...task,
              task: editedTask,
            }
          : task;
      });
    });
  };

  return (
    <div className="app">
      <header>
        <h1 className="header-title">TODO LIST</h1>
        <FormInput addNewTodoList={addNewTodoList} />
      </header>
      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        deleteTask={deleteTask}
        finishTask={markTaskAsFinished}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
