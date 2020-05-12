import React from "react";
import Photo from "../images/johnDoe-photo.webp";
import Curriculum from "../images/Resume John Doe.pdf";

const About = () => {
  return (
    <React.Fragment>
      <h1 className="page-header">About John Doe</h1>

      <div className="about-content">
        <p style={{ textAlign: "justify" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis
          hendrerit orci. Nulla facilisi. Donec odio massa, viverra ac tortor
          non, tempus semper dui. Pellentesque non magna tincidunt orci mollis
          porta in eu turpis. Aliquam erat volutpat. Donec sit amet ante auctor,
          hendrerit arcu id, venenatis mauris. Nulla facilisi. Suspendisse quam
          leo, varius a tempus quis, consectetur non metus. Sed mattis eleifend
          lacus, eget faucibus sem cursus et. Donec lorem lacus, pharetra vitae
          ultrices id, euismod sed libero. Integer semper elit nisi, a elementum
          orci aliquam eget. Vivamus vestibulum pulvinar urna, tincidunt
          interdum enim viverra quis. Sed eleifend urna a dignissim efficitur.
          Nulla non sem eu leo pellentesque congue quis ac risus. Sed aliquet
          nec neque sed auctor.
        </p>
        <p>
          For the full Curriculum click{" "}
          <span>
            <a href={Curriculum} download id="about-page-link">
              here
            </a>
          </span>
          .
        </p>
        <img style={{ width: "100%" }} src={Photo} alt="" />
      </div>
    </React.Fragment>
  );
};

export default About;
