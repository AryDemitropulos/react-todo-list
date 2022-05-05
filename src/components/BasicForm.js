import { useEffect, useState } from "react";

const BasicForm = ({
  onSubmit,
  initialDescription = "",
  placeholder = "",
  buttonText = "Sumbit",
}) => {
  const [description, setDescription] = useState(initialDescription);
  const [error, setError] = useState();
  const [pristine, setPristine] = useState(true);
  useEffect(() => {
    setError(!pristine && !description && "Description is required");
  }, [description]);

  const handleChangeDescription = ({ target }) => {
    setDescription(target.value);
    setPristine(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(description);
    setDescription("");
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className="align-center jc-space-between">
          <input
            onChange={handleChangeDescription}
            value={description}
            className="mr-1"
            type="text"
            placeholder={placeholder}
          ></input>

          <button type="submit" disabled={error}>
            {buttonText}
          </button>
        </form>
        {!pristine && error && <div className="error-text">{error}</div>}
      </div>
    </>
  );
};

export default BasicForm;
