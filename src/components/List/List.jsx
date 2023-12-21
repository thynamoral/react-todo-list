import { useState } from "react";

const List = (props) => {
  const { task, isCompleted } = props;
  return <li className="task">{task}</li>;
};

export default List;
