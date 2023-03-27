import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { ContainerMainClassroom } from './ClassroomVR.styled'

const ClassroomVR = () => {
  return (
    <ContainerMainClassroom>
    

    <h1>Como Criar um Óculos VR</h1>
   

    <div className="content">
      <iframe
        src="https://www.youtube.com/embed/nXp150UnLw0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <div className='info'>
        <h1>Conteúdo</h1>
        <p>Aqui iremos te ensinar como construir o seu próprio óculos de realidade virtual em casa e com  apenas alguns materiais!</p>
        <h1>Materiais</h1>
        <ul>
            <li><a href='https://drive.google.com/file/d/0B1LtQQO3eKRfV0E1SjZHa3V6ME0/view?resourcekey=0-Z9JXvZZoxhV51o4NAjk3Cw' target='_blank'>1 Modelo de papelão do Google</a></li>
            <li>Tesoura</li>
            <li>1 Faca estilete</li>
            <li>Epóxi (líquido seca rápido)</li>
            <li>1 Garrafa plástica clara feita de PET</li>
            <li>1 Seringa com agulha</li>
            <li>Velcro ou elástico</li>
            <li>1 Bastão e pistola de cola quente</li>
            <li>1 Ímã de neodímio</li>
            <li>1 smartphone</li>
        </ul>
        <h1>Adquira seu material conosco!</h1>

        <button>Acessar Loja</button>
      </div>
    </div>

    <Header />
    <Footer/>
  </ContainerMainClassroom>
  )
}

export default ClassroomVR





