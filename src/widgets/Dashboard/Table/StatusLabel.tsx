import { FC } from 'react';
import styles from './index.module.scss';

interface Props {
	status: 'active' | 'inactive';
}

export const StatusLabel: FC<Props> = ({ status }) => {
	return (
		<>
			{status === 'inactive' ? (
				<div className={`${styles.StatusLabel} ${styles.StatusLabelInactive}`}>{status}</div>
			) : (
				<div className={`${styles.StatusLabel} ${styles.StatusLabelActive}`}>{status}</div>
			)}
		</>
	);
};
