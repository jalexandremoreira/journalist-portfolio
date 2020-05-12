import React from "react";

const Contact = () => {
  return (
    <React.Fragment>
      <h1 className="page-header">Contact</h1>

      <div className="contact-details">
        <p style={{ marginBottom: "100px" }}>
          For more information, please reach me via email or phone.
        </p>

        <p>
          <span style={{ fontWeight: "bold", marginRight: "7px" }}>Email</span>{" "}
          ruben@gmail.com
        </p>
        <p>
          <span style={{ fontWeight: "bold", marginRight: "7px" }}>Phone</span>{" "}
          +46 00 000 0000
        </p>
      </div>
    </React.Fragment>
  );
};

export default Contact;
