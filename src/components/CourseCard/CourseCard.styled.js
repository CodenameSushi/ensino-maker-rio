import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  gap: 12px;

  cursor: pointer;

  width: 345px;
  height: 95px;

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

  img {
    height: 70px;
  }

  h1 {
    position: fixed;
    top: 0;
    margin-top: 20px;
    font-family: "DM Mono", monospace;
    font-size: 1rem;
  }

  .card-content{
    display: flex;
    flex-direction: column;
    gap: 12px;

  }


  .info{
    position: fixed;
    bottom: 0;
    margin-bottom: 12px;
    span{
      font-family: 'Source Sans Pro', sans-serif;
      font-size: .75rem;
    }
  }
`;
