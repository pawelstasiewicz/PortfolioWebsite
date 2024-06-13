import styled from "styled-components";
import { portfolioColor } from "../../../../assets/PortfolioData";

export const StyledSocialMedia = styled.div`
    display: flex;
    justify-content: space-between;


    img, button{
        margin: 10px;
        width: 30px;
        color: ${portfolioColor.hexGray1}
    }

    button{
        width: 33px;
        background-color: transparent;
        border-radius: 20px;
        border: 2px solid ${portfolioColor.hexGray1};
        font-family: 'Inika';
    }
    
    @media (min-width: 768px) {
        justify-content: normal;
    }

`