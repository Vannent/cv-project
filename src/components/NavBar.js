import React from "react";
import DownloadButton from "./buttons/DownloadButton";
import EditButton from "./buttons/EditButton";
import PreviewButton from "./buttons/PreviewButton";
import ResetButton from "./buttons/ResetButton";

const NavBar = (props) => {
  return (
    <div className="nav-content">
      <div className="top-nav">
        <EditButton data={props.data} />
        <PreviewButton />
        <ResetButton />
      </div>
      <div className="bottom-nav">
        <DownloadButton />
      </div>
    </div>
  );
};

export default NavBar;
