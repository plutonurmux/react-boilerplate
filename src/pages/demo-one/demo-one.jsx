import React from 'react';
import { switchRouteComponents } from './routes';

const DemoOneRoute = () => (
    <div>
      {switchRouteComponents()}
    </div>
);

export default DemoOneRoute;
