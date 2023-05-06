import { FC } from 'react';
import { ReactComponent as LogoIcon } from '@/assets/icons/logo.svg';
import styles from './index.module.scss';

export const Logo: FC = () => {
	return (
		<div className={styles.Logo}>
			<LogoIcon />
			<strong>Dashboard</strong>
			<span>v.01</span>
		</div>
	);
};
