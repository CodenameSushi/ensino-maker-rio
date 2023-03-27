import React from 'react'
import { TutoresContainer } from './TutoresCard.styled'
import Star from '../../assets/star.png'
import { useNavigate } from 'react-router-dom'
import { goToTesla } from '../../routes/coordinator'

const TutoresCard = (props) => {
    const {item} = props

    const navigate = useNavigate()

    const findNavigation = () => {
      if(item.titleSmall === 'Nikola Tesla'){
        return goToTesla(navigate)
      }
    }
  return (
    <TutoresContainer>

        <img src={item.imageUrl} />
        <h1>{item.titleSmall}</h1>
        <p className='rating'>{item.rating} <img src={Star} /></p>
        <p>Frase de apresentacao, um ou dois paragrafos.</p>
        <button onClick={() => {findNavigation()}}>Visitar Perfil</button>





    </TutoresContainer>
  )
}

export default TutoresCard