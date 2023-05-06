import { FC } from 'react';
import Avatar from '@/assets/avatar.png';
import styles from './index.module.scss';

export const UserInfo: FC = () => {
	return (
		<div className={styles.UserHero}>
			<img src={Avatar} alt='Evano' />
			<div>
				<h3>Evano</h3>
				<span>Project Manager</span>
			</div>
		</div>
	);
};
