import React from 'react'
import { SpotlightCardContainer } from './SpotlightCard.styled'
import Star from '../../assets/star.png'
import { useNavigate } from 'react-router-dom'
import { goToJavascript, goToTesla, goToVr } from '../../routes/coordinator'

const SpotlightCard = (props) => {
    const {item} = props

const navigate = useNavigate();

  const findNavigation = (itemName) => {
    if(itemName === 'JavaScript Intro'){
      return goToJavascript(navigate)
    }

    if(itemName === 'Como Criar um Óculos VR' || itemName === 'Óculos VR'){
        return goToVr(navigate)
      }

      if(itemName === 'Nikola Tesla'){
        return goToTesla(navigate)
      }
    }

  return (
    <SpotlightCardContainer onClick={() => {findNavigation(item.titleSmall)}}>
        <img src={item.imageUrl} alt="img"/>
        <div><p>{item.titleSmall}</p>
        <p>{item.rating} {item.rating && <img className='rate-icon' src={Star} alt="start"/>}</p></div>
    </SpotlightCardContainer>
  )
}

export default SpotlightCard