import { StyledEducation } from "./StyledEducation.styled"
import { portfolioColor } from "../../../assets/PortfolioData"

const Education = (props) => {
  return (
    <StyledEducation fontcolor={
      props.color ? portfolioColor.hexGray2 : portfolioColor.hexWhite
    }>
        <p>{props.portfolioDate}</p>
        <div>
            <p>{props.portfolioSchool}</p>
            <p>{props.portfolioFieldOfStudy}</p>
        </div>
    </StyledEducation>
  )
}

export default Education