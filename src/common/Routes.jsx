import React from 'react';
import {Route, IndexRoute} from 'react-router';

import demoMain from '../pages/demo-main/demo-main';
import demoOne from '../pages/demo-one/demo-one';
import demoTwo from '../pages/demo-two/demo-two';

const routes = () => {
    const Routes = (
			<Route component={demoMain} path={'/'}>
					<IndexRoute component={demoOne} />
					<Route component={demoOne} path='/demoOne' />
					<Route component={demoTwo} path='/demoTwo' />
			</Route>
		);
    return Routes;
};

export default routes;
