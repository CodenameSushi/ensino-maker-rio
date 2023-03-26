import React from "react";
import CourseCard from "../../components/CourseCard/CourseCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { ContainerMain } from "./MainPage.styled";

const MainPage = () => {
  return (
    <ContainerMain>
      <Header />
      <CourseCard />
      <CourseCard />
      <CourseCard />

      <Footer />
    </ContainerMain>
  );
};

export default MainPage;
