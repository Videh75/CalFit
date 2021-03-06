import React from 'react';
import PropTypes from 'prop-types';

const Feature = ({ feature }) => {
  const { icon, title, description } = feature;

  return (
    <div className="feature col">
      <div className="feature-icon bg-gradient">
        <i className={`fas ${icon}`}></i>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.object.isRequired,
};

export default Feature;
