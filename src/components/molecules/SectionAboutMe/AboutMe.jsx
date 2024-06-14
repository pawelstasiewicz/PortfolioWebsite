import { StyledAboutMe } from './StyledAboutMe.styled';
import TitleSection from '../../atoms/Sections/TitleSection';
import { portfolioData } from '../../../assets/PortfolioData';
import Education from '../../atoms/Sections/Education';

const AboutMe = () => {
	return (
		<StyledAboutMe>
			<TitleSection portfolioData={portfolioData.sectionAbout[0]} />
			<p>{portfolioData.sectionAbout[1]}</p>
			<Education
				portfolioDate={portfolioData.sectionAbout[2]}
				portfolioSchool={portfolioData.sectionAbout[3]}
				portfolioFieldOfStudy={portfolioData.sectionAbout[4]}
			/>
			<Education
				portfolioDate={portfolioData.sectionAbout[5]}
				portfolioSchool={portfolioData.sectionAbout[6]}
				portfolioFieldOfStudy={portfolioData.sectionAbout[7]}
			/>
		</StyledAboutMe>
	);
};

export default AboutMe;
