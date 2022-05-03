import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Resume from "../components/Resume";
import Edit from "../components/Edit";
import "../styles/Home.css";
import { useState } from "react";

const Home = (props) => {
  const [resume, setResume] = useState({
    name: "First Last",
    role: "Your Role",
    phone: "000-000-000",
    email: "email@mail.com",
    linkedin: "linkedin.com/in/username/",
    summary: "example example example",
    skills: "skills, skills, skills",
    projects: "project, project, project",
    experience: "experience, experience, experience",
    education: "education, education, education",
  });

  const [handleHome, setHandleHome] = useState(false);
  const handleClick = () => {
    if (handleHome === false) setHandleHome(true);
    else setHandleHome(false);
  };

  return (
    <div className="home">
      <Header />
      <div className="container">
        <div className="navbar">
          <NavBar data={handleClick} />
        </div>
        <div className="content">
          {handleHome ? <Edit resume={resume} /> : <Resume resume={resume} />}
        </div>
      </div>
    </div>
  );
};

export default Home;
