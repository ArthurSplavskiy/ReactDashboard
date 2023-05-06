import { ChangeEvent, FC, useState } from 'react';
import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg';
import useDebounce from '@/hooks/useDebounce';
import styles from './index.module.scss';

interface Props {
	onSearch: (...args: any[]) => void;
}

export const Searchbar: FC<Props> = ({ onSearch }): JSX.Element => {
	const [searchValue, setSearchValue] = useState<string>('');
	const debouncedCallback = useDebounce(onSearch, 100);

	const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
		const query = e.target.value.toLowerCase();
		setSearchValue(query);
		debouncedCallback(query);
	};

	return (
		<div className={styles.Search}>
			<SearchIcon />
			<input type='text' value={searchValue} onChange={onChange} placeholder='Search' />
		</div>
	);
};
