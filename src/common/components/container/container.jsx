import React from 'react';
import PropTypes from 'prop-types';

const Container = ({children}) => (
    <div>
      <h1>Container</h1>
      {children}
    </div>
);

Container.propTypes = {
    children: PropTypes.object
};

export default Container;
