import styled from "styled-components";

export const ContainerMainEvents = styled.main`
  min-height: 100vh;
  padding-bottom: 120px;


  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 120px;

  gap: 32px;

  background-color: #d9d9dd;

  h1{
    font-family: "Roboto Mono", monospace;
  }

  .event {
      display: flex;
      flex-direction: column;
      align-items: center;
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
        flex-direction: row;
        
      }

      h1{
        font-size: 1rem;
        font-family: 'Source Sans Pro', sans;
        text-align: center;
      }
      p{
        font-size: .75rem;
        font-family: 'Source Sans Pro', sans;
      }
      a{
        color: black;
        text-decoration: underline;
      }

      .event-date{
        display: flex;
        gap: 12px;
      }

      .event-name{
        font-size: 1.25rem;
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
    }
  `
