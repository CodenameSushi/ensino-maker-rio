import styled from "styled-components";

export const ContainerNikola = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding-top: 120px;
  padding-bottom: 120px;

  gap: 48px;



  background-color: #d9d9dd;

  .profile-div1{

    display: flex;
    align-items: center;
    gap: 32px;
    .pic{
        border: 4px solid rgba(26, 83, 92, 1);
        border-radius: 50%;
        background: rgba(26, 83, 92, 0.8);
        height: 120px;
    }

    p{
        font-family: 'Source Sans Pro', sans-serif;
        text-align: center;
        font-weight: bold;

    }

    .star{
        height: 15px;
    }

    .title{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: center;
        h1{
            font-size: 1.5rem;
        }
        p{
            font-weight: 500;
        }

        .sub-title{
            display: flex;
            justify-content: space-between;
            gap: 32px;

        }

        .progress{
        background-color: #FF6B6B;
        border-radius: 24px;
        height: fit-content;
        width: 100px;
        padding: 4px;
        text-align: center;
        font-size: 0.8rem;
        font-family: 'Source Sans Pro', sans-serif;

 
    }
    }



  }


  .profile-div2{

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    height: 100vh;
    width: 300px;
    background-color: blue;
    border-radius: 4px;
    padding: 12px;

    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0 30px 200px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.9px);
    -webkit-backdrop-filter: blur(4.9px);
    font-family: 'Source Sans Pro', sans-serif;

    @media (min-width: 800px) {
        width: 600px;
        
    }



    h1{
        font-size: 1rem;
        font-family: 'Source Sans Pro', sans-serif;
    }

    p{
        font-size: .8rem;
        font-family: 'Source Sans Pro', sans-serif;
        padding: 0 12px 0 12px;
        text-align: center;
    }

    a{
        font-size: .8rem;
        text-decoration: underline;
        cursor: pointer;
    }

    .habilidades{
        display: flex;
        align-items: center;
        justify-content: space-between;

        img{
            height: 55px;
        }

    }


      


}
`