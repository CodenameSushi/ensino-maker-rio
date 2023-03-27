import styled from "styled-components";

export const ContainerMainCourses = styled.main`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 120px;
  padding-bottom: 120px;

  gap: 32px;

  background-color: #d9d9dd;


  h1 {
    font-family: "Roboto Mono", monospace;
  }

  .cards {
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
`;
