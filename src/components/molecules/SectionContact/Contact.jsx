import { StyledContact } from './StyledContact.styled';
import TitleSection from '../../atoms/Sections/TitleSection';
import { portfolioData } from '../../../assets/PortfolioData';
import ContactBox from '../../atoms/Sections/ContactBox';
import { portfolioLinks } from '../../../assets/PortfolioData';

const Contact = () => {

  const mailToLink = `mailto:${portfolioLinks.envelope}`

	return (
		<StyledContact>
			<TitleSection portfolioData={portfolioData.sectionContact[0]} />
			<ContactBox
				portfolioEmail={portfolioData.sectionContact[1]}
				portfolioLinkedIn={portfolioData.sectionContact[2]}
				portfolioEnvelope={portfolioData.header[6]}
				portfolioLinkedInIcon ={portfolioData.header[5]}
        portfolioEnvelopeLink = {mailToLink}
        portfolioLinkedInLink = {portfolioLinks.linkedInLink}
			/>
		</StyledContact>
	);
};

export default Contact;
