import { ICustomer } from '@/models/models.types';
import { Dashboard } from '@/widgets/Dashboard';
import { FC } from 'react';
import { useLoaderData } from 'react-router';
import axios from 'axios';

export async function customersLoader() {
	const res = await axios.get<ICustomer[]>('./customers.json');
	return res.data;
}

export const Customers: FC = () => {
	const customers = useLoaderData();
	return (
		<div>
			<Dashboard data={customers as ICustomer[]} />
		</div>
	);
};
