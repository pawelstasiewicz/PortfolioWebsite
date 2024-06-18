import styled from "styled-components";
import { portfolioColor } from "../../../assets/PortfolioData";


export const StyledContactBox = styled.div`

    border: 1px solid ${portfolioColor.hexGray1};
    border-radius: 21px;
    width: 230px;
    margin: 50px auto;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 20px;

    a{
        display:flex;
        align-items: center;
        text-decoration: none;
        margin: 5px auto;

        img{
            margin: 5px;
            width: 20px;
        }

        p{
            color: ${portfolioColor.hexGray1};
            font-family: 'Inika';
        }
    }

    @media (min-width: 768px) {
        flex-direction: row;
        width: 350px;
        a{
            margin: 20px auto;
        }
     }
`