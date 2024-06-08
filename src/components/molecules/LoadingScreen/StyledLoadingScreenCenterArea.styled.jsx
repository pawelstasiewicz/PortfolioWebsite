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
    animation: fadeInOut 5s ease-in-out forwards;

    @keyframes fadeInOut {
        0%{
            opacity:0;
        }
        20%{
            opacity:1;
        }
        80%{
            opacity:1;
        }
        100%{
            opacity:0;
        }  
    }
`

