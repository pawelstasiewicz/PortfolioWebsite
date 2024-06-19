import { StyledNavigation } from './StyledNavigation.styled';
import { portfolioData } from '../../../assets/PortfolioData';
import NavigationList from '../../atoms/Navigation/NavigationList';
import BurgerBtn from '../../atoms/Navigation/BurgerBtn';
import { useEffect, useState } from 'react';
import { portfolioColor } from '../../../assets/PortfolioData';
import { StyledH1 } from './StyledH1.styled';

const Navigation = ({onMoonClick, color}) => {
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
		<StyledNavigation backgroundcolor={color ? portfolioColor.hexWhite : portfolioColor.DarkMode}>
			<StyledH1 fontcolor={color ? portfolioColor.hexGray1 : portfolioColor.hexWhite}>{navigationData[0]}</StyledH1>
			<BurgerBtn onClick={handleClick} color={color}/>
			{navListAppear && <NavigationList onMoonClick={onMoonClick} navigationData={shiftedElements} color={color}/>}
		</StyledNavigation>
	);
};

export default Navigation;
