import React from "react";
import PropTypes from "prop-types";

function Article({ title, date, preview }) {
  // Use a default date if none is provided
  const formattedDate = date || "January 1, 1970";

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>
    </article>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  preview: PropTypes.string.isRequired,
};

export default Article;
