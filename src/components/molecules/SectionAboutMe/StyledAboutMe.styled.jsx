import styled from "styled-components";

export const StyledAboutMe = styled.section`
    position: relative;
    top: 100px;
    display:flex;
    flex-direction: column;
    justify-content: center;
     
    p{
        margin: 30px 50px;
        font-family: 'Inika';
    }

    .aboutMeModifyClass{
        display: flex; 
        flex-direction: column;
        align-items: center;
        
    }

    @media (min-width: 1024px) {
        p{
            margin: 30px 0;
        }
        
        .aboutMeModifyClass{
            width: 90%
            flex-direction: row;

            
            
        }   
    }
`