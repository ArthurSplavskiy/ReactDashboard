import { FC } from 'react';
import { ReactComponent as DashboardIcon } from '@/assets/icons/dashboard.svg';
import { ReactComponent as ProductIcon } from '@/assets/icons/product.svg';
import { ReactComponent as CustomersIcon } from '@/assets/icons/customers.svg';
import { ReactComponent as IncomeIcon } from '@/assets/icons/income.svg';
import { ReactComponent as PromoteIcon } from '@/assets/icons/promote.svg';
import { ReactComponent as HelpIcon } from '@/assets/icons/help.svg';
import { ReactComponent as Arrow } from '@/assets/icons/arrow.svg';
import { NavLink } from 'react-router-dom';
import styles from './index.module.scss';

const MenuItems = [
	{
		icon: <DashboardIcon />,
		name: 'Dashboard',
		route: '/',
		withArrow: false
	},
	{
		icon: <ProductIcon />,
		name: 'Product',
		route: '/product',
		withArrow: true
	},
	{
		icon: <CustomersIcon />,
		name: 'Customers',
		route: '/customers',
		withArrow: true
	},
	{
		icon: <IncomeIcon />,
		name: 'Income',
		route: '/income',
		withArrow: true
	},
	{
		icon: <PromoteIcon />,
		name: 'Promote',
		route: '/promote',
		withArrow: true
	},
	{
		icon: <HelpIcon />,
		name: 'Help',
		route: '/help',
		withArrow: true
	}
];

export const Menu: FC = () => {
	return (
		<nav className={styles.Menu}>
			<ul className={styles.MenuList}>
				{MenuItems.map((li, i) => (
					<li key={i}>
						<NavLink
							to={li.route}
							className={({ isActive, isPending }) =>
								isPending ? 'MenuItem pending' : isActive ? 'MenuItem active' : 'MenuItem'
							}>
							{li.icon}
							{li.name}
							{li.withArrow ? <Arrow /> : null}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
