import React from 'react'
import { ContainerHeader } from './Header.styled'
import Bell from '../../assets/bell.svg'
import { goToMain } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
  return (
    <ContainerHeader className='main'>

        <div className='top-header'>
            <input type="search" placeholder='Buscar'/>
            <img src={Bell} alt='icon'/>

            <div className='profile-div'>
                <p>P</p>
            </div>

        </div>

        

        <div className='menu'>

                <div className='menu-link' onClick={() => goToMain(navigate)}><a>Cursos em Alta</a></div>
                
                <div class="vl"></div>

                <div className='menu-link'><a>Explore</a></div>
                
                <div class="vl"></div>

                <div className='menu-link'><a>Tutores</a></div>
                
            

        </div>

    </ContainerHeader>
  )
}

export default Header