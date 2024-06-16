import styled from "styled-components";
import { portfolioColor } from "../../../assets/PortfolioData";

export const StyledEducation = styled.div`
   display: flex;
   flex-direction: column;
    margin: 50px 0;

   p{
        color:${portfolioColor.hexGray3};
        margin: 10px 50px;
        font-family: 'Inika';
    }

   div{
        p{
            color: ${portfolioColor.hexGray1};
            margin: 10px 50px;
            font-family: 'Inika';
        }
   }

   @media (min-width: 1024px) {
        width: 40vw;  
        flex-direction: row;  

        p{
            margin: 10px 0;
            width: 200px;
            margin-right: 50px;
        }

        div{
            width: 80%;
            display: flex;
            flex-direction: column;
            align-items: end;

            p{
                width: 220px;
                margin: 10px 30px;
            }
        }
    }

    @media (min-width: 1200px) {
    
        div{
            p{
                width: 300px;
            }
        }
    }

    @media (min-width: 1440px) {
         div{
            p{
                width: 350px;
            }
        }
    }
`