import styled from "styled-components";
import { portfolioColor } from "../../../assets/PortfolioData";

export const StyledHeaderText = styled.div`
    margin: 40px auto;
    line-height: 1.5;

    h1{
        color:${portfolioColor.hexGray1};
        font-size: 24px;
        font-family: 'Nanum Myeongjo';
        text-transform: uppercase;
    }

    p{
        color:${portfolioColor.hexGray2};
        font-family: 'Inika';
    }

    @media (min-width: 768px) {
        margin: 40px;
        
        h1{
            font-size: 32px;
        }

        p{
            font-size: 20px;
        }
    }

    @media (min-width: 1024px) {
        width: 700px;

        h1{
            font-size: 40px;
        }

        p{
            font-size: 24px;
        }
    }
`