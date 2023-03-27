import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { ContainerMainTutores } from './Tutores.styled'
import tutores from '../../assets/tutores.json'
import TutoresCard from '../../components/TutoresCard/TutoresCard'

const Tutores = () => {
  return (
    <ContainerMainTutores>

        
        <div className="cards">
          {tutores.map((tutor) => (
            <TutoresCard item={tutor} key={tutor.id} />
          ))}
        </div>
        


        <Header/>
        <Footer/>
    </ContainerMainTutores>
  )
}

export default Tutores