import { StyledAboutMeText } from "./StyledAboutMeText.styled"
import { portfolioColor } from "../../../assets/PortfolioData"

const AboutMeText = (props) => {
  return (
    <StyledAboutMeText fontcolor={
      props.color ? portfolioColor.hexGray2 : portfolioColor.hexWhite}>
        <p>{props.aboutMeText}</p>
    </StyledAboutMeText>
  )
}

export default AboutMeText