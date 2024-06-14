import { StyledPortfolioPage } from './StyledPortfolioPage.styled';
import Navigation from '../../molecules/Navigation/Navigation';
import Header from '../../molecules/Header/Header';
import AboutMe from '../../molecules/SectionAboutMe/AboutMe';

const PortfolioPage = () => {
	return (
		<StyledPortfolioPage>
			<Navigation />
			<Header/>
			<AboutMe/>
		</StyledPortfolioPage>
	);
};

export default PortfolioPage;
