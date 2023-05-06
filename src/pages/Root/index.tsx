import { Sidebar } from '@/widgets/Sidebar';
import { useMobileSidebar } from '@/widgets/Sidebar/useMobileSidebar';
import { FC } from 'react';
import { Outlet } from 'react-router';

export const Root: FC = () => {
	const { open, close, isOpen } = useMobileSidebar((state) => state);
	return (
		<div className='Root'>
			<Sidebar />
			<div className='Layout'>
				<button onClick={isOpen ? () => close() : () => open()} className={'MobileSidebarBtn'}>
					{isOpen ? 'close' : 'open'}
				</button>
				<h1>Hello Evano 👋🏼,</h1>
				<Outlet />
			</div>
		</div>
	);
};
