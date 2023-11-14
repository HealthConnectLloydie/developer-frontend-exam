import React from "react";
import { Fragment } from "react";

const ButtonStyle = {
  marginLeft: "10px",
  marginRight: "10px",
};

interface EditButtonProps {
  onClick: () => void;
}

const EditButton: React.FC<EditButtonProps> = ({ onClick }) => {
  // Wrap the button element in a valid React element, such as a div or span element
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        style={ButtonStyle}
        onClick={onClick}
      >
        Edit
      </button>
    </Fragment>
  );
};

export default EditButton;
