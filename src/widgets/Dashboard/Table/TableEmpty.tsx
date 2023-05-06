import { FC } from 'react';
import styles from './index.module.scss';

export const TableEmpty: FC = () => {
	return (
		<div className={styles.Empty}>
			<span>Empty</span>
		</div>
	);
};
