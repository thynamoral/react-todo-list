import { useState } from "react";
import FunctionalButton from "components/FunctionalButton/FunctionalButton";
import EditableTask from "components/EditableTask/EditableTask";

const Task = (props) => {
  const {
    id,
    task,
    isCompleted,
    isEdited,
    setTodoList,
    deleteTask,
    finishTask,
    editTask,
  } = props;

  // track if the task is editing
  const editingTask = (taskId) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.map((task) => {
        return task.id === taskId
          ? { ...task, isEdited: !task.isEdited }
          : task;
      });
    });
  };

  return (
    <li className="todo-task">
      {isEdited ? (
        <EditableTask
          id={id}
          task={task}
          handleBlur={editingTask}
          editTask={editTask}
        />
      ) : (
        <>
          <span
            className={`task ${isCompleted ? "task-done" : ""}`}
            onClick={() => editingTask(id)}
          >
            {task}
          </span>
          <FunctionalButton
            id={id}
            deleteTask={deleteTask}
            finishTask={finishTask}
          />
        </>
      )}
    </li>
  );
};

export default Task;
