import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import teacher from '../../img/teacher.jpg';
import './TeacherBanner.scss';

const TeacherBanner = () => {
    return (
        <Container fluid>
            <Row className='g-0'>
                <Col md={6}>
                    <img src={teacher} className='img-fluid' />
                </Col>
                <Col className='teacherBanner p-5' md={6} >
                    <h1 style={{color:'white'}} className='mt-4'>Apply for Admission</h1>
                    <h3 style={{color:'#3DB166'}} className='mt-4'>Fall 2019 applications are now open</h3>
                    <p className='teacherP'>We dont just give students an education and experiences that set them up for success in a career. We help them succeed in their career—to discover a field theyre passionate about and dare to lead it.</p>
                    <button className='mt-3 customButton'>Apply Now</button>
                </Col>
            </Row>
        </Container>
    );
};

export default TeacherBanner;