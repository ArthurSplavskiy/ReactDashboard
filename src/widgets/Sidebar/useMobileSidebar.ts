import { create } from 'zustand';

export interface IMobileSidebar {
	isOpen: boolean;
	open: () => void;
	close: () => void;
}

export const useMobileSidebar = create<IMobileSidebar>((set) => ({
	isOpen: false,
	open: () => set({ isOpen: true }),
	close: () => set({ isOpen: false })
}));
