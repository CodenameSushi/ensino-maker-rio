import styled from "styled-components";

export const ContainerMain = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding-top: 120px;
  padding-bottom: 120px;

  gap: 48px;



  background-color: #d9d9dd;

  @media (min-width: 800px) {
    gap: 120px;
  }

  .section-title{
    display: flex;
    justify-content: space-between;
    padding-bottom: 24px;


    

    img{
      height: 25px;
      cursor: pointer;
    }
  }

  .cards{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    cursor: pointer;


    @media (min-width: 800px) {
   gap: 120px;
  }

  }
`;
