import styled from "styled-components";

export const ContainerFooter = styled.footer`

display: flex;
justify-content: space-around;
align-items: center;

position: fixed;
bottom: 0;
left: 0;

height: 80px;
width: 100vw;
padding: 12px;

background: rgba(26, 83, 92, 0.3);
border-radius: 16px 16px 0 0;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
backdrop-filter: blur(4.9px);
-webkit-backdrop-filter: blur(4.9px);
border: 1px solid rgba(217, 217, 217, 0.52);



div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
}

p{
    font-size: .5rem;
}

`

