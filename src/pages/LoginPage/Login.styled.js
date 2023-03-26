import styled from "styled-components";


export const Main = styled.main`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

background: linear-gradient(30deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 70%);







background-size: cover;
height: 100vh;


button{
    background: rgba(26, 83, 92, 0.7);
    border-radius: 4px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5.2px);
    -webkit-backdrop-filter: blur(5.2px);
    border: 1px solid rgba(26, 83, 92, 0.1);
        color: white;
        width: 260px;
        height: 50px;

        cursor: pointer;

        
    }

.login-input{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;


    input{
        width: 260px;
        height: 50px;

        padding: 12px;

        background: rgba(217, 217, 217, 0.2);
        border-radius: 4px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(5.2px);
        -webkit-backdrop-filter: blur(5.2px);
        border: 1px solid rgba(217, 217, 217, 0.1);
    }

    
}


`