import React from "react";
import github from "../../img/github.svg";

const GithubButton = () => {
  const handleClick = (e) => {
    window.open("https://github.com/Vannent/cv-project");
  };
  return (
    <button className="github" id="click" onClick={handleClick}>
      <img src={github} alt="github logo" onClick={handleClick} />
    </button>
  );
};

export default GithubButton;
