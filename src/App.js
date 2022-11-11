import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './App.scss';
import AllEvent from './components/AllEvent/AllEvent';
import AllNews from './components/AllNews/AllNews';
import Application from './components/Application/Application';
import AdminRouter from './components/Authentication/AdminRouter/AdminRouter';
import Login from './components/Authentication/Login/Login';
import Registration from './components/Authentication/Registration/Registration';
import CreateEvent from './components/Dashbord/CreateEvent/CreateEvent';
import CreateNewAdmin from './components/Dashbord/CreateNewAdmin/CreateNewAdmin';
import CreateNewsUpdate from './components/Dashbord/CreateNewsUpdate/CreateNewsUpdate';
import CreateSlider from './components/Dashbord/CreateSlider/CreateSlider';
import CreateTeacher from './components/Dashbord/CreateTeacher/CreateTeacher';
import Dashbord from './components/Dashbord/Dashbord';
import DeleteEvent from './components/Dashbord/DeleteEvent/DeleteEvent';
import DeleteNews from './components/Dashbord/DeleteNews/DeleteNews';
import Deleteslider from './components/Dashbord/Deleteslider/Deleteslider';
import DeleteTeacher from './components/Dashbord/DeleteTeacher/DeleteTeacher';
import StudentInfo from './components/Dashbord/StudentInfo/StudentInfo';
import EventInformation from './components/Home/Event/EventInformation/EventInformation';
import Home from './components/Home/Home';
import NewsInformation from './components/Home/NewsUpdate/NewsInformation/NewsInformation';
import RequiredRoute from './components/RequiredRoute/RequiredRoute';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path='news/:newsinfo'element={<RequiredRoute><NewsInformation></NewsInformation></RequiredRoute>}></Route>
        <Route path='/event/:enventinfo'element={<EventInformation></EventInformation>}></Route>
        <Route path='/event'element={<AllEvent></AllEvent>}></Route>
        <Route path='/news'element={<AllNews></AllNews>}></Route>
        <Route path='/application'element={<RequiredRoute><Application /></RequiredRoute>}></Route>

        {/* Authintication */}
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        {/* Authintication */}

        {/* Dashbord  */}
        <Route path='/dashbord' element={<AdminRouter><Dashbord /></AdminRouter>}>
        <Route path='/dashbord/createslider' element={<CreateSlider></CreateSlider>}></Route>
        <Route path='/dashbord/createnewsupdate' element={<CreateNewsUpdate></CreateNewsUpdate>}></Route>
        <Route path='/dashbord/createevent' element={<CreateEvent></CreateEvent>}></Route>
        <Route path='/dashbord/createteacher' element={<CreateTeacher></CreateTeacher>}></Route>
        <Route path='/dashbord/createadmin' element={<CreateNewAdmin></CreateNewAdmin>}></Route>
        <Route path='/dashbord/deleteslider' element={<Deleteslider></Deleteslider>}></Route>
        <Route path='/dashbord/deleteevent' element={<DeleteEvent></DeleteEvent>}></Route>
        <Route path='/dashbord/deletenews' element={<DeleteNews></DeleteNews>}></Route>
        <Route path='/dashbord/deleteteacher' element={<DeleteTeacher></DeleteTeacher>}></Route>
        <Route path='/dashbord/studentinfo' element={<StudentInfo></StudentInfo>}></Route>
        </Route>
        {/* Dashbord  */}

    </Routes>
    <ToastContainer/>
    </>
  );
};

export default App;