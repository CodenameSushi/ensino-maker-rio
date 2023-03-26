import { BrowserRouter, Route, Routes } from "react-router-dom"
import MyCourses from "../pages/MyCoursesPage/MyCourses"
import Login from "../pages/LoginPage/Login"
import MainPage from "../pages/MainPage/MainPage"
import Signup from "../pages/SignupPage/Signup"
import Classroom from "../pages/ClassroomPage/Classroom"


const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/main" element={<MainPage/>} />
            <Route path="/courses" element={<MyCourses/>} />
            <Route path="/courses/javascript" element={<Classroom/>} />
            

        </Routes>
        </BrowserRouter>
    )

}

export default Router