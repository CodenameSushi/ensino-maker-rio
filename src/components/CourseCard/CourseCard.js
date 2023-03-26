import React from 'react'
import { CardContainer } from './CourseCard.styled'
import Javascript from '../../assets/cards-media/js.png'
import { goToJavascript } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'

const CourseCard = () => {
    const navigate = useNavigate()
  return (
    <div>
    <CardContainer onClick={() => goToJavascript(navigate)}>
        <img src={Javascript}/>
        <div>
            <h1>Introdução Javascript</h1>
            <p>Conheça o curso Introdução ao JavaScript e aperfeiçoe os seus conhecimentos em Programação.</p>
        </div>
        </CardContainer>
        
        </div>
  )
}

export default CourseCard