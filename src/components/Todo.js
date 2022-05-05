import { useContext, useEffect, useState } from "react";
import { context } from "../contexts/TodoContext";
import { NewDescription } from "./NewDescription";

const Todo = ({ todo = {} }) => {
  const { changeCompleted, changeDescription } = useContext(context);
  const [showNewDescription, setShowNewDescription] = useState(false);

  const handleChangeCompleted = () => {
    changeCompleted(todo.id, !todo.completed);
  };

  const changeTodoDescription = (newDescription) => {
    changeDescription(todo.id, newDescription);
    setShowNewDescription(false);
  };

  const handleClickDescription = () => {
    setShowNewDescription(true);
  };

  return (
    <div className="mb-1">
      <div className="align-center jc-space-between">
        <input
          onChange={handleChangeCompleted}
          defaultChecked={todo.completed}
          className="mr-1"
          type="checkbox"
        ></input>
        <div
          className={todo.completed ? "todo-completed" : ""}
          onClick={handleClickDescription}
        >
          {todo.description}
        </div>
      </div>
      {showNewDescription && (
        <NewDescription
          onSubmitNewDescription={changeTodoDescription}
          description={todo.description}
        ></NewDescription>
      )}
    </div>
  );
};

export default Todo;
