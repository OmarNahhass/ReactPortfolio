import React from "react";
import { Document, Page } from "react-pdf";

const Resume = () => {
  const resumeFile = "public\resume.pdf"; // Update this to the path of your resume file in the public directory

  return (
    <div className="resume-container">
      <Document file={resumeFile}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default Resume;
