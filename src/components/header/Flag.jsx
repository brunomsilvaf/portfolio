import React from 'react';
import PropTypes from 'prop-types';

function Flag({ image, ...props }) {
  return <img src={image} loading="lazy" alt="flag" {...props} />;
}

Flag.propTypes = {
  image: PropTypes.node.isRequired
};

export default Flag;
