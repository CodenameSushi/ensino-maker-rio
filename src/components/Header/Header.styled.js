import styled from "styled-components";

export const ContainerHeader = styled.header`

position: absolute;
top: 0;

display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding-top: 12px;
padding-bottom: 4px;

background: rgba(26, 83, 92, 0.3);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
backdrop-filter: blur(4.9px);
-webkit-backdrop-filter: blur(4.9px);
border: 1px solid rgba(15, 49, 55, 0.52);

height: 80px;
width: 100vw;

.top-header{
    display: flex;
    justify-content: space-between;
    gap:32px;
    margin: 0 24px 0 24px;

    input{
        padding: 4px;
        background: rgba(217, 217, 217, 0.2);
        border-radius: 4px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5.2px);
        -webkit-backdrop-filter: blur(5.2px);
        border: 1px solid rgba(217, 217, 217, 0.1);
    }

    .profile-div{
        border-radius: 50%;
        width: 28px;
        height: 28px;
        text-align: center;
        background-color: #D9D9D9;

        background: rgba(217, 217, 217, 0.2);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5.2px);
        -webkit-backdrop-filter: blur(5.2px);
        border: 4px solid rgba(217, 217, 217, 0.1);
    }

}

.menu{

    display: flex;
    justify-content: center;
    width: 100%;
    gap: 48px;
    font-size: .65rem;





    .vl {
        border-left: 2px solid black;
        width: 2px;
    }

    

    .menu-link{
        a{
        color: #D9D9D9;
        cursor: pointer;
    }

    }


}

`

export const ActionMenu = styled.div`

display: flex;
justify-content: space-around;
align-items: center;
height: 80px;
width: 100vw;
padding: 12px;
`