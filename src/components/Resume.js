import React from "react";

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume">
        <div className="resume-header">
          <div className="resume-name">First Last</div>
          <div className="resume-role">Your Role</div>
          <div className="resume-contact">
            <div className="resume-contact-box">
              <div className="resume-ask">Phone:</div>
              <div className="resume-phone-input">000-000-000</div>
            </div>
            <div className="resume-contact-box">
              <div className="resume-ask">Email:</div>
              <div className="resume-phone-input">youremail@mail.com</div>
            </div>
            <div className="resume-contact-box">
              <div className="resume-ask">LinkedIn:</div>
              <div className="resume-phone-input">
                linkedin.com/in/lauren-chen/
              </div>
            </div>
          </div>
        </div>
        <div className="resume-about">
          <div className="about-title">Summary</div>
          <div className="about-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
        <div className="resume-skills">
          <div className="skills-title">Skills</div>
          <div className="skills-list">
            <li className="skills">Skill</li>
            <li className="skills">Skill</li>
            <li className="skills">Skill</li>
          </div>
        </div>
        <div className="resume-projects">
          <div className="project-title">Projects</div>
          <div className="projects-list">
            <li className="projects">Project</li>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit
            </p>
            <li className="projects">Project</li>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit
            </p>
            <li className="projects">Project</li>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit
            </p>
          </div>
        </div>
        <div className="resume-experience">
          <div className="experience-title">Experience</div>
        </div>
        <div className="resume-education">
          <div className="education-title">Education</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
