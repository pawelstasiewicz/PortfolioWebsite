import { StyledLoadingScreen } from "./StyledLoadingScreen.styled"
import  LoadingScreenCenterArea  from "../../molecules/LoadingScreen/LoadingScreenCenterArea"

const LoadingScreen = () => {
  return (
    <StyledLoadingScreen>
      <LoadingScreenCenterArea/>
    </StyledLoadingScreen>
  )
}

export default LoadingScreen