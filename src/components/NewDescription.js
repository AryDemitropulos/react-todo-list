import React, { useEffect, useState } from "react";
import BasicForm from "./BasicForm";

export const NewDescription = ({
  onSubmitNewDescription,
  description = "",
}) => {
  const handleSubmit = (description) => {
    onSubmitNewDescription(description);
  };
  return (
    <BasicForm
      onSubmit={handleSubmit}
      initialDescription={description}
      buttonText="Save"
      placeholder="New Description"
    ></BasicForm>
  );
};
