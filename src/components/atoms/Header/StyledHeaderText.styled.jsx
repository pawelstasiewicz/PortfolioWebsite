import styled from "styled-components";

export const StyledHeaderText = styled.div`
    margin: 40px auto;
    line-height: 1.5;

    

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