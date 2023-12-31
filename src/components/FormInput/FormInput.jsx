import { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";

const FormInput = (props) => {
  const { addNewTodoList } = props;
  // form input state
  const [newTodo, setNewTodo] = useState({
    id: nanoid(),
    task: "",
    isCompleted: false,
    isEdited: false,
  });

  const resetNewTodo = () => {
    setNewTodo({
      id: nanoid(),
      task: "",
      isCompleted: false,
      isEdited: false,
    });
  };

  // useRef to trigger focus on form input when the web is loaded
  const ref = useRef(null);
  useEffect(() => {
    ref.current.focus();
  }, []);

  // update form input value
  const updateNewToDo = (event) => {
    setNewTodo((prevNewTodo) => {
      return { ...prevNewTodo, task: event.target.value };
    });
  };

  // handle form submit and reset form input value
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodo.task.trim() === "") {
      alert(`The task can't be empty!`);
      resetNewTodo();
      return;
    }
    addNewTodoList(newTodo);
    resetNewTodo();
  };

  return (
    <form onSubmit={handleSubmit} className="form-input">
      <input
        ref={ref}
        type="text"
        placeholder="Add a new task..."
        value={newTodo.task}
        onChange={updateNewToDo}
        required={true}
      />
      <button className="add-todo">Add</button>
    </form>
  );
};

export default FormInput;
