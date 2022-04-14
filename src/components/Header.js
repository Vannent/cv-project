import React from "react";
import logo from "../img/logo.svg";
import GithubButton from "./buttons/GithubButton";

const Header = () => {
  return (
    <header className="header">
      <div className="left-header">
        <img src={logo} className="logo" alt="resume logo" />
        <h1 className="logo-title">Resumeé</h1>
      </div>
      <div className="right-header">
        <GithubButton />
      </div>
    </header>
  );
};

export default Header;
