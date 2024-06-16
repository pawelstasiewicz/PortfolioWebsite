import { StyledCadrProject } from "./StyledCardProject.styled"

const CardProject = (props) => {
  return (
    <StyledCadrProject>
        <img src={props.projectImage} alt="Project Image" />
        <p>{props.projectName}</p>
        <div>
            <button>
                <a href={props.githubLink}>{props.githubText}</a>
            </button>
            <button>
                <a href={props.demoLink}>{props.livedemoText}</a>
            </button>
        </div>
    </StyledCadrProject>
  )
}

export default CardProject