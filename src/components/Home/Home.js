import React from 'react';
import Topbar from '../Topbar/Topbar';
import CustomNavbar from './CustomNavbar/CustomNavbar';
import Event from './Event/Event';
import Footer from './Footer/Footer';
import NewsUpdate from './NewsUpdate/NewsUpdate';
import SliderBanner from './SliderBanner/SliderBanner';
import Sponcer from './Sponcer/Sponcer';
import Teacher from './Teacher/Teacher';
import TeacherBanner from './TeacherBanner/TeacherBanner';
import TwitterSlider from './TwitterSlider/TwitterSlider';
import UniversityDevelopment from './UniversityDevelopment/UniversityDevelopment';
import UniversityInformation from './UniversityInformation/UniversityInformation';




const Home = () => {
    return (
        <div className='info' fluid>
            {/* <Row> */}
                <Topbar></Topbar>
                <CustomNavbar></CustomNavbar>
                <SliderBanner></SliderBanner>
                <Sponcer></Sponcer>
                <TeacherBanner></TeacherBanner>
                <UniversityInformation></UniversityInformation>
                <NewsUpdate></NewsUpdate>
                <TwitterSlider></TwitterSlider>
                <UniversityDevelopment></UniversityDevelopment>
                <Event></Event>
                <Teacher></Teacher>
                <Footer></Footer>
            {/* </Row> */}
        </div>
    );
};

export default Home;