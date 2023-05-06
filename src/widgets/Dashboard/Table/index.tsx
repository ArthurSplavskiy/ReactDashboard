import { FC, useRef } from 'react';
import styles from './index.module.scss';
import { ICustomer } from '@/models/models.types';
import { Row } from './Row';
import { TableEmpty } from './TableEmpty';
import { useScrollShadow } from '@/hooks/useScrollShadow';

interface Props {
	customers: ICustomer[];
}

export const Table: FC<Props> = ({ customers }) => {
	const bodyRef = useRef(null);
	useScrollShadow(bodyRef);

	return (
		<table className={styles.Table}>
			<thead className={styles.TableHead}>
				<tr className={styles.TableHeadRow}>
					<th className={styles.TableHeadItem}>Customer Name</th>
					<th className={styles.TableHeadItem}>Company</th>
					<th className={styles.TableHeadItem}>Phone Number</th>
					<th className={styles.TableHeadItem}>Email</th>
					<th className={styles.TableHeadItem}>Country</th>
					<th className={styles.TableHeadItem}>Status</th>
				</tr>
			</thead>
			<tbody ref={bodyRef} className={styles.TableBody}>
				{customers.length ? (
					customers.map((customer, idx) => (
						<Row
							key={idx}
							name={customer.name}
							company={customer.company}
							phone={customer.phone}
							email={customer.email}
							country={customer.country}
							status={customer.activeStatus}
						/>
					))
				) : (
					<TableEmpty />
				)}
			</tbody>
		</table>
	);
};
