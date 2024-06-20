import { StyledCadrProject } from "./StyledCardProject.styled"
import { portfolioColor } from "../../../assets/PortfolioData"

const CardProject = (props) => {
  return (
    <StyledCadrProject fontcolor={
      props.color ? portfolioColor.hexGray2 : portfolioColor.hexWhite}>
        <img src={props.projectImage} alt="Project Image" />
        <p>{props.projectName}</p>
        <div>
            <button>
                <a href={props.githubLink} target="_blank">{props.githubText}</a>
            </button>
            <button>
                <a href={props.demoLink} target="_blank">{props.livedemoText}</a>
            </button>
        </div>
    </StyledCadrProject>
  )
}

export default CardProject