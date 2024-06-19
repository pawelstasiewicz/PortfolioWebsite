import { StyledPortfolioPage } from './StyledPortfolioPage.styled';
import Navigation from '../../molecules/Navigation/Navigation';
import Header from '../../molecules/Header/Header';
import AboutMe from '../../molecules/SectionAboutMe/AboutMe';
import { useEffect, useState } from 'react';
import Projects from '../../molecules/SectionProjects/Projects';
import Contact from '../../molecules/SectionContact/Contact';
import { portfolioColor } from '../../../assets/PortfolioData';

const PortfolioPage = () => {

	const [isBlocked, setIsBlocked] = useState(true)
	const [color, setColor] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() =>{
			setIsBlocked(false)
		},10000)
		
		return () => clearTimeout(timer)
	}, [10000])

	const handleMoonClicked = () =>{
		setColor(prevState => !prevState)
	}

	return (
		<StyledPortfolioPage backgroundcolor={color ? portfolioColor.hexWhite : portfolioColor.DarkMode} >
			<Navigation onMoonClick={handleMoonClicked} color={color}/>
			<Header color={color}/>
			<AboutMe/>
			<Projects/>
			<Contact/>
		</StyledPortfolioPage>
	);
};

export default PortfolioPage;
