import React from "react";

const Edit = (props) => {
  return (
    <div className="resume-container">
      <div className="resume">
        <div className="resume-header">
          <input
            className="resume-name-input"
            name="name"
            type="text"
            placeholder="First Last."
            onChange={(e) =>
              props.setResume({ ...props.resume, name: e.target.value })
            }
          ></input>
          <div className="resume-role">
            <input
              className="resume-role-input"
              name="name"
              type="text"
              placeholder="Your Role."
              onChange={(e) =>
                props.setResume({ ...props.resume, role: e.target.value })
              }
            ></input>
          </div>
          <div className="resume-contact">
            <div className="resume-contact-box">
              <div className="resume-ask">Phone:</div>
              <div className="resume-phone-input">
                <input
                  className="resume-phone-input"
                  name="name"
                  type="text"
                  placeholder="000-000-000"
                  onChange={(e) =>
                    props.setResume({ ...props.resume, phone: e.target.value })
                  }
                ></input>
              </div>
            </div>
            <div className="resume-contact-box">
              <div className="resume-ask">Email:</div>
              <div className="resume-phone-input">
                {" "}
                <input
                  className="resume-phone-input"
                  name="name"
                  type="email"
                  placeholder="email@mail.com"
                  onChange={(e) =>
                    props.setResume({ ...props.resume, email: e.target.value })
                  }
                ></input>
              </div>
            </div>
            <div className="resume-contact-box">
              <div className="resume-ask">LinkedIn:</div>
              <div className="resume-phone-input">
                <input
                  className="resume-phone-input"
                  name="name"
                  type="text"
                  placeholder="linkedin.com/in/username/"
                  onChange={(e) =>
                    props.setResume({
                      ...props.resume,
                      linkedin: e.target.value,
                    })
                  }
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="resume-about">
          <div className="about-title">Summary</div>
          <div className="about-content">
            {" "}
            <input
              className="resume-summary-input"
              name="name"
              type="text"
              placeholder="Summary."
              onChange={(e) =>
                props.setResume({ ...props.resume, summary: e.target.value })
              }
            ></input>
          </div>
        </div>
        <div className="resume-skills">
          <div className="skills-title">Skills</div>
          <div className="skills-list">
            <div className="skills">
              {" "}
              <input
                className="resume-skill-input"
                name="name"
                type="text"
                placeholder="Skill, skill, skill."
                onChange={(e) =>
                  props.setResume({ ...props.resume, skills: e.target.value })
                }
              ></input>
            </div>
          </div>
        </div>
        <div className="resume-projects">
          <div className="project-title">Projects</div>
          <div className="projects-list">
            <div className="projects">
              {" "}
              <input
                className="resume-title-input"
                name="name"
                type="text"
                placeholder="Project Title."
                onChange={(e) =>
                  props.setResume({
                    ...props.resume,
                    projectTitle: e.target.value,
                  })
                }
              ></input>
            </div>
            <p>
              <input
                className="resume-content-input"
                name="name"
                type="text"
                placeholder="Project."
                onChange={(e) =>
                  props.setResume({ ...props.resume, project: e.target.value })
                }
              ></input>
            </p>
          </div>
        </div>
        <div className="resume-experience">
          <div className="experience-title">Experience</div>
          <h3 className="resume-experience-title">
            {" "}
            <input
              className="resume-title-input"
              name="name"
              type="text"
              placeholder="Company."
              onChange={(e) =>
                props.setResume({
                  ...props.resume,
                  experienceTitle: e.target.value,
                })
              }
            ></input>
          </h3>
          <p className="resume-experience-description">
            <input
              className="resume-content-input"
              name="name"
              type="text"
              placeholder="Experience."
              onChange={(e) =>
                props.setResume({ ...props.resume, experience: e.target.value })
              }
            ></input>
          </p>
        </div>
        <div className="resume-education">
          <div className="education-title">Education</div>
          <h3 className="resume-education-title">
            {" "}
            <input
              className="resume-title-input"
              name="name"
              type="text"
              placeholder="Institution."
              onChange={(e) =>
                props.setResume({
                  ...props.resume,
                  educationTitle: e.target.value,
                })
              }
            ></input>
          </h3>
          <p className="resume-education-description">
            <input
              className="resume-content-input"
              name="name"
              type="text"
              placeholder="Education."
              onChange={(e) =>
                props.setResume({ ...props.resume, education: e.target.value })
              }
            ></input>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Edit;
