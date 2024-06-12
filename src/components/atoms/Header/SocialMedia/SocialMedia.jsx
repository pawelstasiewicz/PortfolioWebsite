import { portfolioData } from "../../../../assets/PortfolioData"
import { StyledSocialMedia } from "./StyledSocialMedia.styled"

const SocialMedia = () => {
  return (
    <StyledSocialMedia>
        <img src={portfolioData.header[4]} alt="Github" />
        <img src={portfolioData.header[5]} alt="LinkedIn" />
        <img src={portfolioData.header[6]} alt="Envelope" />
        <button>CV</button>
    </StyledSocialMedia>
  )
}

export default SocialMedia