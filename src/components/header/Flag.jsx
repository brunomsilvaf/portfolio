import React from 'react';
import PropTypes from 'prop-types';

function Flag({ image, alt = '', ...props }) {
  return <img src={image} loading="lazy" alt={alt} {...props} />;
}

Flag.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string
};

export default Flag;
