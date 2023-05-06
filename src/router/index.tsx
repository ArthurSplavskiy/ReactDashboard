import { Customers, customersLoader } from '@/pages/Customers';
import { Root } from '@/pages/Root';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '/',
				element: <div>Dashboard</div>
			},
			{
				path: 'product',
				element: <div>Product</div>
			},
			{
				path: 'customers',
				element: <Customers />,
				loader: customersLoader
			},
			{
				path: 'income',
				element: <div>Income</div>
			},
			{
				path: 'promote',
				element: <div>Promote</div>
			},
			{
				path: 'help',
				element: <div>Help</div>
			}
		]
	}
]);
