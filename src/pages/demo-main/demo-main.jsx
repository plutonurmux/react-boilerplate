import React from 'react';
import PropTypes from 'prop-types';

const DemoMain = ({children}) => (
    <div>
      <h1>Main</h1>
      {children}
    </div>
);

DemoMain.propTypes = {
    children: PropTypes.object
};

export default DemoMain;
