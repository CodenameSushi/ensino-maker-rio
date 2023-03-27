import React from "react";
import { CardContainer } from "./CourseCard.styled";
import { goToJavascript, goToVr } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

const CourseCard = (props) => {
  const {course} = props
  const navigate = useNavigate();

  const findNavigation = (courseId) => {
    if(courseId === '001'){
      return goToJavascript(navigate)
    }
    if(courseId === '002'){
      return goToVr(navigate)
    }
  
    }

  return (
    <div>
      <CardContainer onClick={() => findNavigation(course.id)}>
        <img src={course.imageUrl} />
        <div className="card-content">
          <h1>{course.title}</h1>
          <div className="info"> 
          <span>{course.type}</span>
          </div>
        </div>
      </CardContainer>
    </div>
  );
};

export default CourseCard;
