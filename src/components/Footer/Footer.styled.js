import styled from "styled-components";

export const ContainerFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 0;

  height: 60px;
  width: 100vw;
  padding: 12px;

  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4.9px);
  -webkit-backdrop-filter: blur(4.9px);

  @media (min-width: 800px) {
    visibility: hidden;
    
  }



  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;

    img{
      height: 25px;
    }

 
  }
  

  p {
    font-size: 0.5rem;
    font-family: 'Source Sans Pro', sans-serif;
  }
`;
