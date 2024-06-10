import { StyledBurgerBtn } from "./StyledBurgerBtn.styled"

const BurgerBtn = ({onClick}) => {
  return (
    <StyledBurgerBtn onClick={onClick}>
        <i className="fa-solid fa-bars"></i>
    </StyledBurgerBtn>
  )
}

export default BurgerBtn