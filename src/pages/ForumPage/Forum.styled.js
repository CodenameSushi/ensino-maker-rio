import styled from "styled-components";

export const ContainerMainForum = styled.main`
  min-height: 100vh;
  padding-bottom: 120px;


  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 120px;

  gap: 32px;

  background-color: #d9d9dd;

  .posts-container {

    display: flex;
    flex-direction: column;
    gap: 24px;

    width: 80vw;


   

    @media (min-width: 800px) {
        width: 30vw;
    }



    .post {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 12px;
      gap: 12px;

      cursor: pointer;

      width: 100%;
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

      .post-info{
        width: 100%;
        display: flex;
        align-items: center;
        gap: 4px;
        ;
        p{
            font-size: .75rem;
        }
        h1{
            padding-left: 32px;
            padding-right: 32px;
            font-family: 'Source Sans Pro', sans-serif;
            font-size: 1.25rem;
        }
        span{
            font-size: .5rem;
            padding-top: 10px;

        }
        img{
            border-radius: 50%;
            height: 45px;
        }

      }
      .post-content{
        width: 100%;
        p{
            font-family: 'Source Sans Pro', sans;
            padding: 12px;
        }
      }

      .post-likes{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        gap: 8px;
        padding: 0 12px 12px 12px;

        span{
            font-size: .75rem;
            color: gray;
        }
      }
    }
  }
`;
