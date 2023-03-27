import styled from "styled-components";

export const ContainerMainClassroom = styled.main`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  padding-top: 120px;
  padding-bottom: 120px;

  gap: 32px;

  background-image: linear-gradient(45deg, #8baaaa 0%, #ffffff 100%);


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
      font-family: 'Source Sans Pro', sans-serif;
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

  .info{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  ul{
    text-align: center;
  }
 

  li{
    a{
        text-decoration: underline;
        color: black;
    }
    font-family: 'Source Sans Pro', sans-serif;
    text-align: start;
  }
  button {
    background: rgba(26, 83, 92, 0.8);
    border-radius: 4px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5.2px);
    -webkit-backdrop-filter: blur(5.2px);
    border: 1px solid rgba(26, 83, 92, 0.1);
    color: white;
    width: 220px;
    height: 40px;
    margin-top: 12px;
    font-family: 'Source Sans Pro', sans;
    font-weight: bold;

    cursor: pointer;
  }
`;
