import { StyledAboutMeText } from "./StyledAboutMeText.styled"

const AboutMeText = (props) => {
  return (
    <StyledAboutMeText>
        <p>{props.aboutMeText}</p>
    </StyledAboutMeText>
  )
}

export default AboutMeText