import { StyledTitleSection } from "./StyledTitleSection.styled"
import { portfolioColor } from "../../../assets/PortfolioData"

const TitleSection = (props) => {
  return (
    <StyledTitleSection fontcolor={props.color ? portfolioColor.hexGray1 : portfolioColor.hexWhite}>
        {props.portfolioData}
    </StyledTitleSection>
  )
}

export default TitleSection