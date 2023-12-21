import List from "components/List/List";

const TodoList = (props) => {
  const { todoList } = props;
  return (
    <main className="todo-list">
      <h2>My Tasks</h2>
      <ul className="tasks">
        {todoList.map((todo) => {
          return (
            <List
              key={todo.id}
              task={todo.task}
              isCompleted={todo.isCompleted}
            />
          );
        })}
      </ul>
    </main>
  );
};

export default TodoList;
