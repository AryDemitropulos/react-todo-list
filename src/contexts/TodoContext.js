import { createContext, useState } from "react";

export const context = createContext();
const { Provider } = context;

const TodoContext2 = ({ children }) => {
  const [todoList, setTodoList] = useState([
    { id: 1, description: "TODO 1", completed: false },
    { id: 2, description: "TODO 2", completed: false },
    { id: 3, description: "TODO 3", completed: true },
  ]);

  const addTodo = (description) => {
    const todo = {
      description,
      completed: false,
      id: todoList.length + 1,
    };
    setTodoList([...todoList, todo]);
  };

  const changeCompleted = (idTodo, newValue) => {
    const newTodoList = [...todoList];
    const todo = newTodoList.find((todo) => todo.id === idTodo);
    todo.completed = newValue;
    setTodoList(newTodoList);
  };

  const changeDescription = (idTodo, newValue) => {
    const newTodoList = [...todoList];
    const todo = newTodoList.find((todo) => todo.id === idTodo);
    todo.description = newValue;
    setTodoList(newTodoList);
  };

  const defaultValue = {
    todoList,
    addTodo,
    changeCompleted,
    changeDescription,
  };
  return <Provider value={defaultValue}>{children}</Provider>;
};

export default TodoContext2;
