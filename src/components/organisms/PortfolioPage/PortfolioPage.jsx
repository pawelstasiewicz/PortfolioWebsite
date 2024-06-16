import { StyledPortfolioPage } from './StyledPortfolioPage.styled';
import Navigation from '../../molecules/Navigation/Navigation';
import Header from '../../molecules/Header/Header';
import AboutMe from '../../molecules/SectionAboutMe/AboutMe';
import { useEffect, useState } from 'react';
import Projects from '../../molecules/SectionProjects/Projects';

const PortfolioPage = () => {

	const [isBlocked, setIsBlocked] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() =>{
			setIsBlocked(false)
		},10000)
		
		return () => clearTimeout(timer)
	}, [10000])
	

	return (
		<StyledPortfolioPage >
			<Navigation />
			<Header/>
			<AboutMe/>
			<Projects/>
		</StyledPortfolioPage>
	);
};

export default PortfolioPage;
