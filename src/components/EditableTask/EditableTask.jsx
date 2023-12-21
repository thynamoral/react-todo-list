import { useState } from "react";

const EditableTask = (props) => {
  const { id, task, handleBlur, editTask } = props;

  // track latest edited task input
  const [editedTask, setEditedTask] = useState(task);

  // update the state of the task to the latest edited task
  const updateEditedValue = (event) => {
    const { value } = event.target;
    setEditedTask(value);
    editTask(id, value);
  };

  // hanle Enter keydown
  const handleEnterKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleBlur(id);
    }
  };

  return (
    <input
      className="editable-task"
      type="text"
      value={editedTask}
      onChange={(event) => updateEditedValue(event)}
      onBlur={() => handleBlur(id)}
      onKeyDown={(event) => handleEnterKeyDown(event)}
      autoFocus={true}
    />
  );
};

export default EditableTask;
