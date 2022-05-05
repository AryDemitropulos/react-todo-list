import { useEffect, useState } from "react";
import Todo from "./Todo";

export const TodoList = ({ todoList = [], showCompleted }) => {
  const [list, setList] = useState(todoList);

  useEffect(() => {
    let newList = todoList;
    if (!showCompleted) {
      newList = list.filter((todo) => !todo.completed);
    }

    setList([...newList]);
  }, [todoList, showCompleted]);

  return (
    <>
      {list.map((todo) => (
        <Todo todo={todo} key={todo.id}></Todo>
      ))}
    </>
  );
};
