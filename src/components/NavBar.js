import React from "react";
import editIcon from "../img/edit.svg";
import previewIcon from "../img/preview.svg";
import resetIcon from "../img/reset.svg";

const NavBar = () => {
  return (
    <div className="nav-content">
      <div className="top-nav">
        <li>
          <img src={editIcon} alt="edit icon" />
          Edit
        </li>
        <li>
          <img src={previewIcon} alt="preview icon" />
          Preview
        </li>
        <li>
          <img src={resetIcon} alt="reset icon" />
          Reset
        </li>
      </div>
      <div className="bottom-nav">
        <button className="download-button">Download</button>
      </div>
    </div>
  );
};

export default NavBar;
