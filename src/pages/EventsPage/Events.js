import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { ContainerMainEvents } from './Events.styled'

const Events = () => {
  return (
    <ContainerMainEvents>
        <h1>Próximos Eventos</h1>

        <div className='event'>
            <div className='event-date'>
                <h1>07/04/2023</h1>
                <h1>-</h1>
                <h1>16:00</h1>
            </div>
        <h1 className='event-name'>Oficina de Robótica </h1>
        <p>Local: Universidade Figma - Méier</p>
        <button>Inscrever-se</button>

        </div>



        <div className='event'>
            <div className='event-date'>
                <h1>01/05/2023</h1>
                <h1>-</h1>
                <h1>04/05/2023</h1>
            </div>
        <h1 className='event-name'>Rio Web Summit</h1>
        <p>Local: Não Confirmado</p>
        <button>Inscrever-se</button>

        </div>


        <div className='event'>
            <div className='event-date'>
                <h1>13/06/2023</h1>
                <h1>-</h1>
                <h1>16/06/2023</h1>
            </div>
        <h1 className='event-name'>Brazil Coders</h1>
        <p>Local: Pier Mauá</p>
        
        <button>Inscrever-se</button>

        </div>


        

        <Header/>
        <Footer/>
    </ContainerMainEvents>
  )
}

export default Events