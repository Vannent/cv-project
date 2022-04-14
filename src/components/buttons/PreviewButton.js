import React from "react";
import previewIcon from "../../img/preview.svg";

const PreviewButton = () => {
  return (
    <li>
      <img src={previewIcon} alt="preview icon" />
      Preview
    </li>
  );
};

export default PreviewButton;
