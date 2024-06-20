import { StyledContactBox } from "./StyledContactBox.styled"
import { portfolioColor } from "../../../assets/PortfolioData"

const ContactBox = (props) => {
  return (
    <StyledContactBox fontcolor={
      props.color ? portfolioColor.hexGray2 : portfolioColor.hexWhite} backgroundradius={props.color ? '' : portfolioColor.hexWhite}>
        <a href={props.portfolioEnvelopeLink}>
            <img src={props.portfolioEnvelope} alt="Envelope Icon" />
            <p>{props.portfolioEmail}</p>
        </a>
        <a href={props.portfolioLinkedInLink}>
            <img src={props.portfolioLinkedInIcon} alt="LinkedIn Icon" />
            <p>{props.portfolioLinkedIn}</p>
        </a>
    </StyledContactBox>
  )
}

export default ContactBox