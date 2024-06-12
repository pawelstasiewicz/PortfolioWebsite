import { portfolioData } from "../../../assets/PortfolioData"
import { StyledProfilePicture } from "./StyledProfilePicture.styled"

const ProfilePicture = () => {
  return (
    <StyledProfilePicture src={portfolioData.header[3]} alt="Profile Picture" />    
  )
}

export default ProfilePicture