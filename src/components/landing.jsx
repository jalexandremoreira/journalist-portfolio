import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <React.Fragment>
      <h1 className="home-page-header">John Doe</h1>
      <p className="home-page-subtext">Journalist & Columnist</p>
      <p className="home-page-subtext2">Contact me: JohnDoe@email.com</p>
      <p className="home-page-subtext3">
        Click{" "}
        <Link to="/portfolio" id="landing-page-link">
          here
        </Link>{" "}
        to view my published work.
      </p>
    </React.Fragment>
  );
};

export default LandingPage;
