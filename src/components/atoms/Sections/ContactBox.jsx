import { StyledContactBox } from "./StyledContactBox.styled"

const ContactBox = (props) => {
  return (
    <StyledContactBox>
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