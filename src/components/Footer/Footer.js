import React from "react";
import { ContainerFooter } from "./Footer.styled";
import SalaIcon from "../../assets/sala-icon.svg";
import EventsIcon from "../../assets/events-icon.svg";
import ForumIcon from "../../assets/forum-icon.svg";
import Settings from "../../assets/settings.svg";
import { useNavigate } from "react-router-dom";
import { goToCourses, goToEvents, goToForum } from "../../routes/coordinator";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <ContainerFooter>
      <div>
        <img
          src={SalaIcon}
          alt="nav-icon"
          onClick={() => goToCourses(navigate)}
        />
        <p>Sala Virtual</p>
      </div>

      <div>
        <img src={EventsIcon} alt="nav-icon" onClick={() => goToEvents(navigate)}/>
        <p>Eventos</p>
      </div>

      <div>
        <img src={ForumIcon}
         alt="nav-icon"
         onClick={() => goToForum(navigate)} />
        <p>Fórum</p>
      </div>

      <div>
        <img src={Settings} alt="nav-icon" />
        <p>Configurações</p>
      </div>
    </ContainerFooter>
  );
};

export default Footer;
