import { StyledHeaderText } from "./StyledHeaderText.styled"
import { portfolioData } from "../../../assets/PortfolioData"
import SocialMedia from "./SocialMedia/SocialMedia"

const HeaderText = () => {
  return (
    <StyledHeaderText>
        <p>{portfolioData.header[0]}</p>
        <h1>{portfolioData.header[1]}</h1>
        <p>{portfolioData.header[2]}</p>
        <SocialMedia/>
    </StyledHeaderText>
  )
}

export default HeaderText