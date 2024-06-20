import { StyledContact } from './StyledContact.styled';
import TitleSection from '../../atoms/Sections/TitleSection';
import { portfolioData } from '../../../assets/PortfolioData';
import ContactBox from '../../atoms/Sections/ContactBox';
import { portfolioLinks } from '../../../assets/PortfolioData';
import { portfolioColor } from '../../../assets/PortfolioData';

const Contact = ({ color }) => {
	const mailToLink = `mailto:${portfolioLinks.envelope}`;

	return (
		<StyledContact
			id="section2"
			fontcolor={color ? portfolioColor.hexWhite : portfolioColor.DarkMode}
		>
			<TitleSection portfolioData={portfolioData.sectionContact[0]} color={color}/>
			<ContactBox
				portfolioEmail={portfolioData.sectionContact[1]}
				portfolioLinkedIn={portfolioData.sectionContact[2]}
				portfolioEnvelope={portfolioData.header[6]}
				portfolioLinkedInIcon={portfolioData.header[5]}
				portfolioEnvelopeLink={mailToLink}
				portfolioLinkedInLink={portfolioLinks.linkedInLink}
				color={color}
			/>
		</StyledContact>
	);
};

export default Contact;
