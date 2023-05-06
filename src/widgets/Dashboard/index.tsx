import { FC, useState } from 'react';
import { Table } from './Table';
import { ICustomer } from '@/models/models.types';
import { Searchbar } from '../Searchbar';
import styles from './index.module.scss';

interface Props {
	data: ICustomer[];
}

export const Dashboard: FC<Props> = ({ data }) => {
	const [customers, setCustomers] = useState<ICustomer[]>(data);

	const searchItemIndexes = (search: string): number[] => {
		const m = data.map((obj) => {
			return Object.values(obj).map((item) => {
				return item.toLowerCase().includes(search);
			});
		});

		const idxArr = [];
		for (let i = 0; i < m.length; i++) {
			const subArr = m[i];
			for (let j = 0; j < subArr.length; j++) {
				const item = subArr[j];
				if (item === true) {
					idxArr.push(i);
				}
			}
		}

		return [...new Set(idxArr)];
	};

	const onSearch = (search: string) => {
		const result = data.filter((_, index) => searchItemIndexes(search).includes(index));
		setCustomers(result);
	};

	return (
		<div className={styles.Dashboard}>
			<div className={styles.Head}>
				<div className={styles.HeadName}>
					<h2 className={styles.HeadTitle}>All Customers</h2>
					<span className={styles.HeadStatus}>Active Members</span>
				</div>
				<Searchbar onSearch={onSearch} />
			</div>
			<Table customers={customers} />
		</div>
	);
};
