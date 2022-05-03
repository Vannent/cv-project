import React from "react";
import editIcon from "../../img/edit.svg";

const EditButton = (props) => {
  return (
    <li onClick={props.data}>
      <img src={editIcon} alt="edit icon" />
      Edit
    </li>
  );
};

export default EditButton;
