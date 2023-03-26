import styled from "styled-components";

export const ContainerMain = styled.main`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  padding-top: 120px;

  gap: 32px;

  background-image: linear-gradient(45deg, #8baaaa 0%, #ae8b9c 100%);

  h1 {
    font-size: 1rem;
  }

  select {
    text-align: center;
    background: rgba(217, 217, 217, 0.2);
    border-radius: 4px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.2px);
    -webkit-backdrop-filter: blur(5.2px);
    border: 1px solid rgba(217, 217, 217, 0.1);
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    @media (min-width: 800px) {
        flex-direction: row;
      }

    p {
      font-family: "Roboto Mono", monospace;
      font-size: 0.75rem;
      padding: 12px;
      @media (min-width: 800px) {
        max-width: 40vw;
        padding: 32px;
        line-height: 1.3rem;
      }
  
    }
  } 

  iframe {
    width: 560px;
    height: 315px;

    @media (max-width: 800px) {
      width: 350px;
      height: 195px;
    }
  }
`;
