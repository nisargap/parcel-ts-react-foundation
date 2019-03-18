import React from 'react';
import ReactDOM from 'react-dom';
import App from '/App'
import { RouterProvider, Route } from 'react-router5'
import createRouter from 'router5';
import browserPlugin from 'router5-plugin-browser';
import 'foundation-sites/dist/css/foundation.min.css';

const routes = [
    { name: 'home', path: '/' },
    { name: 'profile', path: '/profile' },
    { name: 'ryan', path: '/ryan' },
]

const router = createRouter(routes);

router.usePlugin(browserPlugin());
router.start();

declare const module: any

ReactDOM.render(
    <RouterProvider router={router}>
        <Route>
            {(routeProps: any) => <App route={routeProps.route} />}
        </Route>
    </RouterProvider>,
    document.getElementById('root')
)
// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
}
