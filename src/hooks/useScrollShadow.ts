import { useEffect } from 'react';

export const useScrollShadow = (ref: any) => {
	const topShadow = 'rgba(0, 0, 0, 0.35) 0px 13px 31px -27px inset';
	const bottomShadow = 'rgba(0, 0, 0, 0.35) 0px -50px 36px -60px inset';
	const transition = '0.2s ease';
	useEffect(() => {
		if (ref.current) {
			ref.current.addEventListener('scroll', function scroll() {
				ref.current.style.transition ? null : (ref.current.style.transition = transition);
				const scrollToEnd = ref.current.scrollTop + ref.current.clientHeight;
				if (ref.current.scrollTop === 0) {
					ref.current.style.boxShadow = bottomShadow;
				}
				if (ref.current.scrollTop > 0 && scrollToEnd !== ref.current.scrollHeight) {
					ref.current.style.boxShadow = `${bottomShadow}, ${topShadow}`;
				}
				if (scrollToEnd >= ref.current.scrollHeight) {
					ref.current.style.transition = '';
					ref.current.style.boxShadow = topShadow;
				}
			});
			if (ref.current.scrollHeight > ref.current.clientHeight) {
				ref.current.style.boxShadow = bottomShadow;
			}
		}
	}, []);
};
