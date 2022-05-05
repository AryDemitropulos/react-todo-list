import { TodoList } from "./TodoList";
import { context } from "../contexts/TodoContext";
import { useContext, useState } from "react";
import NewTodo from "./NewTodo";

const TodoContainer = () => {
  const { todoList } = useContext(context);
  const [showCompleted, setShowCompleted] = useState(false);

  const handleClick = () => {
    setShowCompleted(!showCompleted);
  };
  return (
    <>
      <div className="mb-2">
        <button onClick={handleClick} className="mb-1">
          Show completed
        </button>
        <NewTodo></NewTodo>
      </div>
      <TodoList todoList={todoList} showCompleted={showCompleted}></TodoList>
    </>
  );
};

export default TodoContainer;
