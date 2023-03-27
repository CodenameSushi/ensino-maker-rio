import styled from "styled-components";

export const SpotlightCardContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;

    height: 120px;
    width: 100px;
    
    border-radius: 35px;
    text-align: center;

    img{
        height: 100px;
        width: 100px;
        border-radius: 35px;

    }

    p{
        font-size:.75rem;
    }
    .rate-icon{
        height: 10px;
        width: 10px;
    }

    @media (min-width: 800px) {
        img{
        height: 150px;
        width: 150px;
        border-radius: 35px;

    }
   
  }



`