import React from 'react';
import { Route } from 'react-router-dom';

export default (routes) => {
    return (routes.map((route, index) => (
        <Route key={index} {...route} />
    )));
};
