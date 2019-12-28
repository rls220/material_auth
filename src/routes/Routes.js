import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { allRoutes as routes } from './index';


const Routes = () => (
	<BrowserRouter>
		<Switch>
			{routes.map((route, index) => {
				return (
						<route.route
							key={index}
							path={route.path}
							exact={route.exact}
							component={route.component}
						/>
					)
			})}
		</Switch>
	</BrowserRouter>
);

export default Routes;
