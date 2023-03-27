import React, { useState } from "react";
import { ContainerHeader} from "./Header.styled";
import Bell from "../../assets/bell.svg";
import Profile from '../../assets/profile.png'
import { goToExplore, goToMain, goToTutores } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import ProfileCard from "../ProfileCard/ProfileCard";

const Header = () => {
  const navigate = useNavigate();

  const [showProfile, setShowProfile] = useState(false)

  const toogleProfile = () => {
    setShowProfile(!showProfile)
  }




  return (
    
    <ContainerHeader className="main">
      <div className="top-header">
        <input type="search" placeholder="Buscar" />
        
        

        <div className="profile-div">

        <img src={Bell} alt="icon" />
        <img src={Profile} alt="icon" onClick={() => toogleProfile()}/>

        </div>

      </div>

      {showProfile && <ProfileCard toogleProfile={toogleProfile}/> }

      <div className="menu">
        <div className="menu-link" onClick={() => goToMain(navigate)}>
          <a>Destaques</a>
        </div>


        <div className="menu-link" onClick={() => goToExplore(navigate)}>
          <a>Explorar</a>
        </div>


        <div className="menu-link" onClick={() => goToTutores(navigate)}>
          <a>Tutores</a>
        </div>
      </div>
    </ContainerHeader>
  );
};

export default Header;
