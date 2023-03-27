import styled from "styled-components";

export const ContainerHeader = styled.header`
  position: absolute;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;


  border-bottom: 1px solid black;

  background: rgba(255, 255, 255, 0.7);

  height: 80px;
  width: 100vw;

  .top-header {
    display: flex;
    justify-content: space-between;
    padding-top: 12px;
    width: 80vw;
    gap: 32px;

 

    input {
      padding: 4px;
      background: rgba(217, 217, 217, 0.5);
      border-radius: 4px;
      border: 2px solid rgba(0, 0, 0, .5);
    }

    .profile-div {
      display: flex;
      gap: 32px;
      

      img{
        height: 25px;
        cursor: pointer;
      }

      text-align: center;

    }

  }

  .menu {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-bottom: 4px;


    .menu-link {
      width: 33vw;
      text-align: center;

      a {
        color: black;
        cursor: pointer;
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 0.8rem;
        :hover{
          color: gray;
        }
      }
    }
  }
`;

export const ActionMenu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  width: 100vw;
  padding: 12px;
`;

