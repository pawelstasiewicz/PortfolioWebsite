import styled from "styled-components";
import { portfolioColor } from "../../../../assets/PortfolioData";

export const StyledSocialMedia = styled.div`
    
    display: flex;

    img, button{
        margin-top: 10px;
        margin-right: 10px;
        width: 30px;
        height: 30px;
        background-color: ${(props) => props.backgroundradius};
        backdrop-filter:blur(50px);
        border-radius: 5px;
        color: ${(props) => props.fontcolor};
    }

    button{
        width: 30px;
        background-color: transparent;
        border-radius: 20px;
        border: 2px solid ${(props) => props.fontcolor};
        font-family: 'Inika';
        cursor: pointer;
    }
    
    @media (min-width: 768px) {
        justify-content: normal;
    }

`