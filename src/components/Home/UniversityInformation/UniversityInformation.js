import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './UniversityInformation.scss';

const UniversityInformation = () => {
    return (
        <div className='customContainer mainInformation'>
            <Container>
                <Row>
                    <Col md={5}>
                        <h4 className='mt-5' style={{color:'white'}}>University Of Johannesburg</h4>
                        <h5 className='mt-3' style={{color:'#51BE6D'}}>About Our University</h5>
                    </Col>
                    <Col md={7}>
                        <p className='universityInformationP'>
                        We are one of the largest, most diverse universities in the USA with over 90,000 students in USA, and a further 30,000 studying across 180 countries for Kingster University.
                        <br /><br />
                        Kingster University was established by John Smith in 1920 for the public benefit and it is recognized globally. Throughout our great history, Kingster has offered access to a wide range of academic opportunities. As a world leader in higher education, the University has pioneered change in the sector.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default UniversityInformation;