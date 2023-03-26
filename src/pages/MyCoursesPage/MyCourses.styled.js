import styled from "styled-components";

export const ContainerMain = styled.main`
min-height: 100vh;

display: flex;
flex-direction: column;
align-items: center;

padding-top: 120px;

gap: 32px;

background-image: linear-gradient(45deg, #8baaaa 0%, #ae8b9c 100%);



h1{
    font-family: 'Roboto Mono', monospace;
}

.cards{
    display: flex;
    flex-direction: column;
    gap: 32px;
    
    @media (min-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    
}

}


`
