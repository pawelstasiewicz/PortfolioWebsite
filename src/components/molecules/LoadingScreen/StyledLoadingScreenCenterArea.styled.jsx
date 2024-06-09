import styled from "styled-components";
import { portfolioColor } from "../../../assets/PortfolioData";

export const StyledLoadingScreenCenterArea = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background-color: transparent;
    border: 2px solid ${portfolioColor.hexGray1};
    border-radius: 21px;
    animation: fadeInOut 8s ease-in-out forwards;

    @keyframes fadeInOut {
      0% {
            opacity: 0;
            transform: translate(-50%, -50%) translateY(20px); 
        }
        10%, 90% {
            opacity: 1;
            transform: translate(-50%, -50%) translateY(-2px); 
        }

        20%, 80%{
            transform: translate(-50%, -50%) translateY(0px);
        }

        30%, 70%{
            transform: translate(-50%, -50%) translateY(-2px);
        }

        40%, 60%{
            transform: translate(-50%, -50%) translateY(0px);
        }

        50%{
            transform: translate(-50%, -50%) translateY(-2px);
        }

        100% {
            opacity: 0;
        }  
    }

`

