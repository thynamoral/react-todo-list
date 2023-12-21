import Task from "components/Task/Task";

const TodoList = (props) => {
  const { todoList, setTodoList, deleteTask, finishTask, editTask } = props;

  return (
    <main className="todo-list">
      <h2>My Tasks</h2>
      {todoList.length === 0 && (
        <p className="no-task">Go add a new task now...</p>
      )}
      <ul className="tasks">
        {todoList.map((todo) => {
          return (
            <Task
              key={todo.id}
              id={todo.id}
              task={todo.task}
              isCompleted={todo.isCompleted}
              isEdited={todo.isEdited}
              setTodoList={setTodoList}
              deleteTask={deleteTask}
              finishTask={finishTask}
              editTask={editTask}
            />
          );
        })}
      </ul>
    </main>
  );
};

export default TodoList;
