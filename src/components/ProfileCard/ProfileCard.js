import React from 'react'
import { ProfileCardStyled } from './ProfileCard.styled'
import Profile from '../../assets/profile.png'
import SalaIcon from "../../assets/sala-icon.svg";
import EventsIcon from "../../assets/events-icon.svg";
import ForumIcon from "../../assets/forum-icon.svg";
import Settings from "../../assets/settings.svg";
import { useNavigate } from 'react-router-dom';
import { goToCourses, goToEvents, goToForum } from '../../routes/coordinator';

const ProfileCard = (props) => {
    const navigate = useNavigate()
    const {toogleProfile} = props
  return (
    <ProfileCardStyled>
        <button className='close-button' onClick={() => toogleProfile()}>x</button>
        <div className='profile-header'>
            <div className='profile-header-1'>
            <p>Fernando Henrique</p>
            <img src={Profile} alt="profile-icon"/>
            </div>
            <p className='level'>Nível 2 - Tutor</p>
            <div className='progress'>Avance para o nível 5 para criar evento</div>
        </div>

        <div className='profile-menu'>
            <div className='profile-menu-action' onClick={() => goToCourses(navigate)}>
        <img
          src={SalaIcon}
          alt="nav-icon"
        />
        <p>Sala Virtual</p>
        </div>
      

      <div className='profile-menu-action'onClick={() => goToEvents(navigate)}>
        <img src={EventsIcon} alt="nav-icon" />
        <p>Eventos</p>
      </div>

      <div className='profile-menu-action' onClick={() => goToForum(navigate)}>
        <img src={ForumIcon} alt="nav-icon" />
        <p>Fórum</p>
      </div>

      <div className='profile-menu-action' id='config-button'> 
        <img src={Settings} alt="nav-icon" />
        <p>Configurações</p>
      </div>

      </div>

        
        </ProfileCardStyled>
  )
}

export default ProfileCard