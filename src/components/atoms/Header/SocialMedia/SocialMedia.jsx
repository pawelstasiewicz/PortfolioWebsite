import { portfolioData } from "../../../../assets/PortfolioData"
import { StyledSocialMedia } from "./StyledSocialMedia.styled"
import { portfolioLinks } from "../../../../assets/PortfolioData"
import { portfolioColor } from "../../../../assets/PortfolioData"

const SocialMedia = ({color}) => {

  const mailToLink = `mailto:${portfolioLinks.envelope}`

  return (
    <StyledSocialMedia fontcolor={
      color ? portfolioColor.hexGray2 : portfolioColor.hexWhite
    } backgroundradius={color ? '' : portfolioColor.hexWhite}>
        <a href={portfolioLinks.gitHubLink} target="_blank">
          <img src={portfolioData.header[4]} alt="Github" />
        </a>
        <a href={portfolioLinks.linkedInLink} target="_blank">
          <img src={portfolioData.header[5]} alt="LinkedIn" />
        </a>
        <a href={mailToLink} >
          <img src={portfolioData.header[6]} alt="Envelope" />
        </a>
        <button>CV</button>
        
    </StyledSocialMedia>
  )
}

export default SocialMedia