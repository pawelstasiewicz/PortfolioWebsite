import { StyledAboutMe } from './StyledAboutMe.styled';
import TitleSection from '../../atoms/Sections/TitleSection';
import { portfolioData } from '../../../assets/PortfolioData';
import Education from '../../atoms/Sections/Education';
import AboutMeText from '../../atoms/Sections/AboutMeText';
import { StyledPHeader } from '../../atoms/Header/StyledPHeader.styled';
import { portfolioColor } from '../../../assets/PortfolioData';

const AboutMe = ({ color }) => {
	return (
		<StyledAboutMe id="section0">
			<TitleSection
				portfolioData={portfolioData.sectionAbout[0]}
				color={color}
			/>
			<div className='aboutMeModifyClass'>
				<div>
					<StyledPHeader
						fontcolor={
							color ? portfolioColor.hexGray2 : portfolioColor.hexWhite
						}
					>
						{portfolioData.sectionAbout[1]}
					</StyledPHeader>
					<Education
						portfolioDate={portfolioData.sectionAbout[2]}
						portfolioSchool={portfolioData.sectionAbout[3]}
						portfolioFieldOfStudy={portfolioData.sectionAbout[4]}
						color={color}
					/>
					<Education
						portfolioDate={portfolioData.sectionAbout[5]}
						portfolioSchool={portfolioData.sectionAbout[6]}
						portfolioFieldOfStudy={portfolioData.sectionAbout[7]}
						color={color}
					/>
				</div>
				<AboutMeText aboutMeText={portfolioData.sectionAbout[8]} 
				color={color}/>
			</div>
		</StyledAboutMe>
	);
};

export default AboutMe;
