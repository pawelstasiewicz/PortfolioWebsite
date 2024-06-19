import { StyledBurgerBtn } from "./StyledBurgerBtn.styled"
import { portfolioColor } from "../../../assets/PortfolioData"

const BurgerBtn = ({onClick, color}) => {
  return (
    <StyledBurgerBtn onClick={onClick} fontcolor={color ? portfolioColor.hexGray1 : portfolioColor.hexWhite}>
        <i className="fa-solid fa-bars"></i>
    </StyledBurgerBtn>
  )
}

export default BurgerBtn