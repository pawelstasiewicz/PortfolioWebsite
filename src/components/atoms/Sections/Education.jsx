import { StyledEducation } from "./StyledEducation.styled"

const Education = (props) => {
  return (
    <StyledEducation>
        <p>{props.portfolioDate}</p>
        <div>
            <p>{props.portfolioSchool}</p>
            <p>{props.portfolioFieldOfStudy}</p>
        </div>
    </StyledEducation>
  )
}

export default Education