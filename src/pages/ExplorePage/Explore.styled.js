import styled from "styled-components";

export const ContainerMainExplore = styled.main`
  min-height: 100vh;
  padding-bottom: 120px;


  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 120px;

  gap: 32px;

  background-color: #d9d9dd;





  .news {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 12px;
      gap: 12px;

      width: 80vw;
      height: fit-content;
      padding: 12px;

      background: rgba(236, 236, 236, 0.4);
      border-radius: 4px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(6.8px);
      -webkit-backdrop-filter: blur(6.8px);

      :hover {
        transition: all 0.25s ease-in-out;

        background: rgb(236, 236, 236);
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
          rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
          rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
      }

      @media (min-width: 800px) {
        width: 600px;
        
      }

      h1{
        font-size: 1rem;
        font-family: 'Source Sans Pro', sans;
      }
      p{
        font-size: .75rem;
        font-family: 'Source Sans Pro', sans;
      }
      a{
        color: black;
        text-decoration: underline;
      }
    }
  `