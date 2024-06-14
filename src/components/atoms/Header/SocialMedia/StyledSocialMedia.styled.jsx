import styled from "styled-components";
import { portfolioColor } from "../../../../assets/PortfolioData";

export const StyledSocialMedia = styled.div`
    
    display: flex;

    img, button{
        margin-top: 10px;
        margin-right: 10px;
        width: 30px;
        height: 30px;
        color: ${portfolioColor.hexGray1}
    }

    button{
        width: 30px;
        background-color: transparent;
        border-radius: 20px;
        border: 2px solid ${portfolioColor.hexGray1};
        font-family: 'Inika';
    }
    
    @media (min-width: 768px) {
        justify-content: normal;
    }

`