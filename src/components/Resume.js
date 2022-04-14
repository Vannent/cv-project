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
      </div>
    </div>
  );
};

export default Resume;
