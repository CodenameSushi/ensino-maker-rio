import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { ContainerMainForum } from "./Forum.styled";
import Comments from '../../assets/comments.svg'
import Profile from '../../assets/profile.png'

const Forum = () => {
  return (
    <ContainerMainForum>
      
      <div className="posts-container">
        <div className="post">
          <div className="post-info">
            <img src="https://i.imgur.com/yEh9aBb.png" alt="avatar" />
            <p>Nikolas Tesla</p>
            <h1>Reflexão</h1>
            <span>3 horas atrás</span>
          </div>

          <div className="post-content">
          <p>
            O dinheiro não representa tal valor como os homens colocaram em cima
            dele. Todo o meu dinheiro foi investido nas experiências com as
            quais eu fiz descobertas novas permitindo a humanidade de ter uma
            vida um pouco mais fácil.
          </p>
          </div>


          <div className="post-likes">
            <img src={Comments} alt="comments"/>
            <span>23</span>

          </div>
        </div>

        <div className="post">
          <div className="post-info">
            <img src={Profile} alt="avatar" />
            <p>Afonso Solano</p>
            <h1>Impressão 3D</h1>
            <span>4 horas atrás</span>
          </div>

          <div className="post-content">
          <p>
            Olá amigos! Recentemente comprei uma impressora 3d para acompanhar o curso de criação 3d.
            Porém estou tendo problemas de configuração, alguém poderia me ajudar?
          </p>
          </div>


          <div className="post-likes">
            <img src={Comments} alt="comments"/>
            <span>7</span>

          </div>
        </div>

        <div className="post">
          <div className="post-info">
            <img src={Profile} alt="avatar" />
            <p>Maria Helena</p>
            <h1>Evento Maker</h1>
            <span>23 horas atrás</span>
          </div>

          <div className="post-content">
          <p>
            Bom dia pessoal, estou organizando um evento de ensino maker na zona norte do rio, em 
            parceria com a Universidade Lorem Ipsum e estou em busca de Tutores para me ajudar no evento!
          </p>
          </div>


          <div className="post-likes">
            <img src={Comments} alt="comments"/>
            <span>54</span>

          </div>
        </div>

        




        
      </div>

      <Header />
      <Footer />
    </ContainerMainForum>
  );
};

export default Forum;
