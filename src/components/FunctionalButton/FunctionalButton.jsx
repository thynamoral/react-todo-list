import { MdDeleteOutline } from "react-icons/md";
import { MdDone } from "react-icons/md";

const FunctionalButton = (props) => {
  const { id, deleteTask, finishTask } = props;

  return (
    <span className="functional-button">
      <span className="finish-button" onClick={() => finishTask(id)}>
        <MdDone />
      </span>
      <span className="delete-button" onClick={() => deleteTask(id)}>
        <MdDeleteOutline />
      </span>
    </span>
  );
};

export default FunctionalButton;
