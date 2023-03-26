import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { ContainerMain } from "./Classroom.styled";

const Classroom = () => {
  return (
    <ContainerMain>
      <Header />
      <h1>Introdução Javascript</h1>
      <label for="select-modulo">Módulo:</label>
      <select name="modulos" id="select-modulo">
        <option value="">--Escolha um modulo--</option>
        <option value="modulo-1">1 - Variáveis</option>
        <option value="modulo-2">2 - Operadores</option>
        <option value="modulo-3">3 - Funções</option>
        <option value="modulo-4">4 - Strings</option>
        <option value="modulo-5">5 - Arrays e Objetos</option>
      </select>

      <div className="content">
        <iframe
          src="https://www.youtube.com/embed/Ptbk2af68e8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <div>

        <h1>Conteúdo</h1>
        <p>
          JavaScript é uma linguagem de programação que permite a você
          implementar itens complexos em páginas web — toda vez que uma página
          da web faz mais do que simplesmente mostrar a você informação estática
          — mostrando conteúdo que se atualiza em um intervalo de tempo, mapas
          interativos ou gráficos 2D/3D animados, etc. — você pode apostar que o
          JavaScript provavelmente está envolvido. É a terceira camada do bolo
          das tecnologias padrões da web, duas das quais (HTML e CSS) nós
          falamos com muito mais detalhes em outras partes da Área de
          Aprendizado.
        </p>
        </div>
      </div>

      <Footer />
    </ContainerMain>
  );
};

export default Classroom;
