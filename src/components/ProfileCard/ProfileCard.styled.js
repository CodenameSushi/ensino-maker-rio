import styled from "styled-components";

export const ProfileCardStyled = styled.section`
position: absolute;
right: 0;
height: 100vh;
width: 30vh;
background-color: blue;

background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 30px 200px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4.9px);
  -webkit-backdrop-filter: blur(4.9px);

transition: all 1s ease;

.close-button{
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    border: none;
    color: #FF6B6B;
    background: none;
    font-size: 1.25rem;
    cursor: pointer;
}

.profile-header{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 24px;
    height: 20vh;
    background-color: #FFE66D;


    .profile-header-1{
        display: flex;
        justify-content: space-between;
        gap: 32px;
    }
    
    .level{
        font-family: "DM Mono", monospace;
    }

    .progress{
        background-color: #FF6B6B;
        border-radius: 24px;
        height: fit-content;
        width:fit-content;
        padding: 4px;
        text-align: center;
        font-size: 0.6rem;
        font-family: 'Source Sans Pro', sans-serif;

 
    }


    p{
        font-family: 'Source Sans Pro', sans-serif;
    }

    img{
        height: 25px;
        cursor: pointer;
    }

    
}

.profile-menu{
        display: flex;
        flex-direction: column;
        gap: 40px;
        padding: 48px 12px 12px 12px;
    }

    
    .profile-menu-action{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 24px;
        height: 40px;

        cursor: pointer;

        img{
            height: 25px;
        }

        @media (max-width: 800px) {
    visibility: hidden;
    
  }
    }

    #config-button{
        position: absolute;
        bottom: 0;
    }




`