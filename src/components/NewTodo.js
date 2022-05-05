import { useContext } from "react";
import { context } from "../contexts/TodoContext";
import BasicForm from "./BasicForm";

const NewTodo = () => {
  const { addTodo } = useContext(context);

  const handleSubmit = (description) => {
    addTodo(description);
  };

  return (
    <BasicForm
      placeholder="New TODO"
      buttonText="Add"
      onSubmit={handleSubmit}
    ></BasicForm>
  );
};

export default NewTodo;
