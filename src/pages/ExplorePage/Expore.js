import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { ContainerMainExplore } from './Explore.styled'

const Explore = () => {
  return (
    <ContainerMainExplore>
        

        <div className='news'>
        <h1>Estudo investiga cenário da cultura maker em escolas brasileiras</h1>
        <p>Autor: Bruna Braga - UNIFESP</p>
        <a href='https://www.unifesp.br/campus/sjc/noticias/3290-estudo-investiga-cenario-da-cultura-maker-em-escolas-brasileiras.html' target='_blank'> Ir para a notícia</a>
        </div>

        <div className='news'>
        <h1>A importância da gestão de dados para o dia a dia dos empreendedores</h1>
        <p>Autor:  Eduardo Tardelli </p>
        <a href='https://canaltech.com.br/colunas/a-importancia-da-gestao-de-dados-para-o-dia-a-dia-dos-empreendedores/' target='_blank'> Ir para a notícia</a>


        </div>

        <div className='news'>
        <h1>Como transformar o cenário socioeconômico através da educação em TI</h1>
        <p>Autor: Fernando D'Angelo</p>
        <a href='https://canaltech.com.br/colunas/como-transformar-o-cenario-socioeconomico-atraves-da-educacao-em-ti/' target='_blank'> Ir para a notícia</a>


        </div>



        <Header/>
        <Footer/>

    </ContainerMainExplore>
  )
}

export default Explore