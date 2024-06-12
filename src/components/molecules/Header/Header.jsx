import { StyledHeader } from "./StyledHeader.styled"
import ProfilePicture from "../../atoms/Header/ProfilePicture"
import HeaderText from "../../atoms/Header/HeaderText"

const Header = () => {
  return (
    <StyledHeader>
        <ProfilePicture/>
        <HeaderText/>
    </StyledHeader>
  )
}

export default Header