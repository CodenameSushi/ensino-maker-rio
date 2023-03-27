import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { ContainerNikola } from "./NikolaTesla.styled";
import Star from "../../assets/star.png";

const NikolaTesla = () => {
  return (
    <ContainerNikola>
      <div className="profile-div1">
        <div className="picture">
          <img
            className="pic"
            src="https://i.imgur.com/yEh9aBb.png"
            alt="profile-pic"
          />
          <p>
            5.0
            <img className="star" src={Star} />
          </p>
        </div>

        <div className="title">
          <h1>Nikola Tesla</h1>
          <div className="sub-title">
            <p>Inventor</p>
            <span className="progress">Tutor Nível 5</span>
          </div>
        </div>
      </div>
      <div className="profile-div2">
        <h1>Sobre mim:</h1>
        <p>
          Engenheiro eletrotécnico e engenheiro mecânico sérvio. Sou conhecido
          por minhas contribuições ao projeto do moderno sistema de fornecimento
          de eletricidade em corrente alternada.
        </p>
        <h1>Conhecimentos:</h1>
        <div>
          <div className="habilidades">
            <p>Engenharia Mecânica</p>
            <img src="https://thenounproject.com/api/private/icons/3318901/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABkINn5aRsFtPMI8eO6Y3oLF_x6eGaPnv-lMFsaMSBIFf3qNejuf40hk-PnuSAqRIBn8fWnCwlX1QCH1o7jIRo-1521gA%3D%3D" />
          </div>
          <div className="habilidades">
            <p>Física</p>
            <img src="https://thenounproject.com/api/private/icons/3318928/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABkINn5aRsFtPMI8eO6Y3oLF_x6eGaPnv-lMFsaMSBIFf3qNejuf40hk-PnuSAqRIBn8fWnCwlX1QCH1o7jIRo-1521gA%3D%3D" />
          </div>
        </div>
        <h1>Cursos</h1>
        <a>Como construir um motor de indução</a>
      </div>
      <Header />
      <Footer />
    </ContainerNikola>
  );
};

export default NikolaTesla;
