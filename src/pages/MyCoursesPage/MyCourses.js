import React from "react";
import CourseCard from "../../components/CourseCard/CourseCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { ContainerMainCourses } from "./MyCourses.styled";
import courses from '../../assets/courses.json'

const MyCourses = () => {

  
  return (
    <ContainerMainCourses>
      
      
      <h1>Meus Cursos</h1>

      <div className="cards">
        {courses.map((course) => (
          <CourseCard
          course={course}
          key={course.id} />
        ))}

      </div>
      <Header />
      <Footer />
    </ContainerMainCourses>
  );
};

export default MyCourses;
