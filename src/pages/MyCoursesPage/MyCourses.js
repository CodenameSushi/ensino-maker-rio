import React from 'react'
import CourseCard from '../../components/CourseCard/CourseCard'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { ContainerMain } from './MyCourses.styled'


const MyCourses = () => {
  return (
    <ContainerMain>
        <Header/>
        <h1>Meus Cursos</h1>

        <div className='cards'>
            <CourseCard/>
            <CourseCard/>

        </div>
        <Footer/>
    </ContainerMain>
  )
}

export default MyCourses