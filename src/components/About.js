import React from "react";
import PropTypes from "prop-types";

function About({ logo, aboutText }) {
 
  const logoSrc = logo || "https://via.placeholder.com/215";
  
  return (
    <aside>
      <img src={logoSrc} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
}

About.propTypes = {
  logo: PropTypes.string,
  aboutText: PropTypes.string.isRequired,
};

export default About;
