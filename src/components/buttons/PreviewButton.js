import React from "react";
import previewIcon from "../../img/preview.svg";

const PreviewButton = (props) => {
  return (
    <li onClick={() => props.setHandleHome(false)}>
      <img src={previewIcon} alt="preview icon" />
      Preview
    </li>
  );
};

export default PreviewButton;
