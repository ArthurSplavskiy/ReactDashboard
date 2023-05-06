import { FC } from 'react';
import { Menu } from './Menu';
import { Logo } from './Logo';
import { UserInfo } from './UserInfo';
import { useMobileSidebar } from './useMobileSidebar';
import styles from './index.module.scss';
import classNames from 'classnames';

export const Sidebar: FC = () => {
	const { isOpen } = useMobileSidebar((state) => state);
	return (
		<div
			className={classNames(styles.Sidebar, {
				[styles.show]: isOpen
			})}>
			<Logo />
			<Menu />
			<UserInfo />
		</div>
	);
};
