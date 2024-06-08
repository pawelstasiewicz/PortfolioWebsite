import { portfolioData } from '../../../assets/PortfolioData';
import { StyledLoadingScreenText } from './StyledLoadingScreenText.styled';

const LoadingScreenText = () => {
	return (
		<StyledLoadingScreenText>
            {portfolioData.nav[0]}
        </StyledLoadingScreenText>
	);
};

export default LoadingScreenText;
