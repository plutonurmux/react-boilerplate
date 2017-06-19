import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

export const Status = ({ code, children }) => (
  <Route render={({ staticContext }) => {
      if (staticContext) {
          staticContext.status = code;
      }

      return children;
  }}/>
);

// Status.propTypes = {
//     code: PropTypes.string,
//     children: PropTypes.string
// };
