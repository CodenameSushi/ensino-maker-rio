import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyCourses from "../pages/MyCoursesPage/MyCourses";
import Login from "../pages/LoginPage/Login";
import MainPage from "../pages/MainPage/MainPage";
import Signup from "../pages/SignupPage/Signup";
import Forum from "../pages/ForumPage/Forum";
import Explore from "../pages/ExplorePage/Expore";
import Tutores from "../pages/TutoresPage/Tutores";
import Events from "../pages/EventsPage/Events";
import ClassroomJavascript from "../pages/ClassroomJavascript/ClassroomJavascript";
import ClassroomVR from "../pages/ClassroomVR.js/ClassroomVR";
import NikolaTesla from "../pages/NikolaTesla/NikolaTesla";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/courses" element={<MyCourses />} />
        <Route path="/javascript" element={<ClassroomJavascript />} />
        <Route path="/vr" element={<ClassroomVR/>} />
        <Route path="/forum" element={<Forum/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/tutores" element={<Tutores/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/nikolatesla" element={<NikolaTesla/>}/>
        
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
