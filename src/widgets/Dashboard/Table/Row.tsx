import { FC } from 'react';
import { StatusLabel } from './StatusLabel';
import styles from './index.module.scss';

interface Props {
	name: string;
	company: string;
	phone: string;
	email: string;
	country: string;
	status: string;
}

export const Row: FC<Props> = ({ name, company, phone, email, country, status }) => {
	return (
		<tr className={styles.Row}>
			<td>
				<span>{name}</span>
			</td>
			<td>
				<span>{company}</span>
			</td>
			<td>
				<span>{phone}</span>
			</td>
			<td>
				<span>{email}</span>
			</td>
			<td>
				<span>{country}</span>
			</td>
			<td>
				<StatusLabel status={status.toLowerCase() as 'active' | 'inactive'} />
			</td>
		</tr>
	);
};
