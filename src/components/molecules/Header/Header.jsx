import { StyledHeader } from "./StyledHeader.styled"
import ProfilePicture from "../../atoms/Header/ProfilePicture"
import HeaderText from "../../atoms/Header/HeaderText"

const Header = ({color}) => {
  return (
    <StyledHeader>
        <ProfilePicture/>
        <HeaderText color={color}/>
    </StyledHeader>
  )
}

export default Header