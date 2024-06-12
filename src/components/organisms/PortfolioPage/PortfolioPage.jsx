import { StyledPortfolioPage } from './StyledPortfolioPage.styled';
import Navigation from '../../molecules/Navigation/Navigation';
import Header from '../../molecules/Header/Header';

const PortfolioPage = () => {
	return (
		<StyledPortfolioPage>
			<Navigation />
			<Header/>
		</StyledPortfolioPage>
	);
};

export default PortfolioPage;
