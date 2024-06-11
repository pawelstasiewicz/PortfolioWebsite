import { StyledNavigation } from './StyledNavigation.styled';
import { portfolioData } from '../../../assets/PortfolioData';
import NavigationList from '../../atoms/Navigation/NavigationList';
import BurgerBtn from '../../atoms/Navigation/BurgerBtn';
import { useEffect, useState } from 'react';

const Navigation = () => {
	const navigationData = portfolioData.nav;
	const shiftedElements = [...navigationData];
	shiftedElements.shift();

	const [navListAppear, setNavListAppear] = useState(true);

	useEffect(() => {
		const handleResize = () => {
			window.innerWidth >= 768
				? setNavListAppear(true)
				: setNavListAppear(false);
		};

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	function handleClick() {
		setNavListAppear(!navListAppear);
	}

	return (
		<StyledNavigation>
			<h1>{navigationData[0]}</h1>
			<BurgerBtn onClick={handleClick} />
			{navListAppear && <NavigationList navigationData={shiftedElements} />}
		</StyledNavigation>
	);
};

export default Navigation;
