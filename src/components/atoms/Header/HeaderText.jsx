import { StyledHeaderText } from './StyledHeaderText.styled';
import { portfolioData } from '../../../assets/PortfolioData';
import SocialMedia from './SocialMedia/SocialMedia';
import { StyledH1Header } from './StyledH1Header.styled';
import { portfolioColor } from '../../../assets/PortfolioData';
import { StyledPHeader } from './StyledPHeader.styled';

const HeaderText = ({color}) => {

	return (
		<StyledHeaderText>
			<StyledPHeader fontcolor={
					color ? portfolioColor.hexGray2 : portfolioColor.hexWhite
				}>{portfolioData.header[0]}</StyledPHeader>
			<StyledH1Header
				fontcolor={
					color ? portfolioColor.hexGray1 : portfolioColor.hexWhite
				}
			>
				{portfolioData.header[1]}
			</StyledH1Header>
			<StyledPHeader fontcolor={
					color ? portfolioColor.hexGray2 : portfolioColor.hexWhite
				}>{portfolioData.header[2]}</StyledPHeader>
			<SocialMedia />
		</StyledHeaderText>
	);
};

export default HeaderText;
