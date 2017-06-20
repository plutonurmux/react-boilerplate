import DemoOneHome from './demo-one-home';
import DemoOneChild from './demo-one-child';
import routerRender from '../../common/RouteRender';

export const routes = [{
    exact: true,
    component: DemoOneHome,
    path: '/demoOne'
}, {
    component: DemoOneChild,
    path: '/demoone/:number'
}];

export const switchRouteComponents = () => (
    routerRender(routes)
);
