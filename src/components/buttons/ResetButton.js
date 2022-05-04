import React from "react";
import resetIcon from "../../img/reset.svg";

const ResetButton = () => {
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <li onClick={refreshPage}>
      <img src={resetIcon} alt="reset icon" />
      Reset
    </li>
  );
};

export default ResetButton;
