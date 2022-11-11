import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './Teacher.scss';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";


const Teacher = () => {
    const [teachers,setTeachers]=useState([])

    useEffect(()=>{
        fetch('https://rdxuniversity.onrender.com/teacher')
        .then(res => res.json())
        .then(data => setTeachers(data.result))
    },[])

    return (
        <div className='customContainer teacher'>
        <Container className='mt-5'>
            <Row>
                <Col className='mt-5'>
                    <h1 style={{color:"#3DB166",margin:'50px'}}>Our Teachers</h1>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    spaceBetween={50}
                    slidesPerView={3}
                    loop={true}
                    scrollbar={{ draggable: true }}
                    coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {
                        teachers.map(singleTeacher => <SwiperSlide key={singleTeacher._id}>
                            <img src={singleTeacher.teacherimg} className='img-fluid' />
                            <h5 style={{color:'white',textAlign:'center'}}>{singleTeacher.name}</h5>
                        </SwiperSlide>)
                    }
                </Swiper>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Teacher;