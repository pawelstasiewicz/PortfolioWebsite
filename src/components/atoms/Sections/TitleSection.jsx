import { StyledTitleSection } from "./StyledTitleSection.styled"

const TitleSection = (props) => {
  return (
    <StyledTitleSection>
        {props.portfolioData}
    </StyledTitleSection>
  )
}

export default TitleSection