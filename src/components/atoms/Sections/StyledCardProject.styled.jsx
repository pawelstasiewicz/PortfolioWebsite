import styled from "styled-components";
import { portfolioColor } from "../../../assets/PortfolioData";

export const StyledCadrProject = styled.div`
    width: 230px;
    border: 1px solid ${portfolioColor.hexGray1};
    border-radius: 21px;
    margin: 60px auto;
    text-align: center;

    img{
        width: 130px;
        height: 142px;
        border-radius: 15px; 
        margin: 20px 30px;
    }

    p{
        font-family: 'Inika'
    }

    div{

        margin: 20px 0;

        button{
            border: 1px solid ${portfolioColor.hexGray1};
            border-radius: 21px;
            height: 25px;
            margin: 5px;
            background-color: transparent;

            a{
                color: ${portfolioColor.hexGray1};
                text-decoration: none;
                margin: 25px 15px;
                font-family: 'Inika';
            }
        }
    }
`