import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SpotlightCard from "../../components/SpotlightCards/SpotlightCard";
import { ContainerMain } from "./MainPage.styled";
import courses from "../../assets/courses.json";
import Arrow from "../../assets/right-arrow.png";
import makers from '../../assets/makers.json'
import tutores from '../../assets/tutores.json'

const MainPage = () => {
  return (
    <ContainerMain>
      

      <div className="section-container">
        <div className="section-title">
          <p>Destaques Makers</p>
          <img src={Arrow} alt="arrow" />
        </div>

        <div className="cards">
          {makers.map((maker) => (
            <SpotlightCard item={maker} key={maker.id} />
          ))}
        </div>
      </div>

      <div className="section-container">
        <div className="section-title">
          <p>Cursos em Destaque</p>
          <img src={Arrow} alt="arrow" />
        </div>

        <div className="cards">
          {courses.map((course) => (
            <SpotlightCard item={course} key={course.id} />
          ))}
        </div>
      </div>

      <div className="section-container">
        <div className="section-title">
          <p>Tutores em Destaque</p>
          <img src={Arrow} alt="arrow" />
        </div>

        <div className="cards">
          {tutores.map((tutor) => (
            <SpotlightCard item={tutor} key={tutor.id} />
          ))}
        </div>
      </div>

      <Header />
      <Footer />
    </ContainerMain>
  );
};

export default MainPage;
