import React from "react";

const Resume = (props) => {
  return (
    <div className="resume-container">
      <div className="resume">
        <div className="resume-header">
          <div className="resume-name">{props.resume.name}</div>
          <div className="resume-role">{props.resume.role}</div>
          <div className="resume-contact">
            <div className="resume-contact-box">
              <div className="resume-ask">Phone:</div>
              <div className="resume-phone-input">{props.resume.phone}</div>
            </div>
            <div className="resume-contact-box">
              <div className="resume-ask">Email:</div>
              <div className="resume-phone-input">{props.resume.email}</div>
            </div>
            <div className="resume-contact-box">
              <div className="resume-ask">LinkedIn:</div>
              <div className="resume-phone-input">{props.resume.linkedin}</div>
            </div>
          </div>
        </div>
        <div className="resume-about">
          <div className="about-title">Summary</div>
          <div className="about-content">{props.resume.summary}</div>
        </div>
        <div className="resume-skills">
          <div className="skills-title">Skills</div>
          <div className="skills-list">
            <div className="skills">{props.resume.skills}</div>
          </div>
        </div>
        <div className="resume-projects">
          <div className="project-title">Projects</div>
          <div className="projects-list">
            <div className="projects">{props.resume.projectTitle}</div>
            <p>{props.resume.project}</p>
          </div>
        </div>
        <div className="resume-experience">
          <div className="experience-title">Experience</div>
          <h3 className="resume-experience-title">
            {props.resume.experienceTitle}
          </h3>
          <p className="resume-experience-description">
            {props.resume.experience}
          </p>
        </div>
        <div className="resume-education">
          <div className="education-title">Education</div>
          <h3 className="resume-education-title">
            {props.resume.educationTitle}
          </h3>
          <p className="resume-education-description">
            {props.resume.education}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
