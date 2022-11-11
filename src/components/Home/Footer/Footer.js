import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import './Footer.scss';
const Footer = () => {
    return (
        <Container fluid className='footer'>
            <Row>
                <Col md={4} className='text-center'>
                    <img src={logo} className='img-fluid' />
                </Col>
                <Col md={4} className='text-center'>
                <h1 style={{color:'white'}}>Quick Links</h1>
                    <div style={{display:'flex',gap:'20'}}>
                    <ul className='text-center mx-auto'>
                        <li style={{listStyle:'none',color:'white',marginTop:'20px'}}>
                            <Link style={{textDecoration:"none",color:'white'}} to=''>Event</Link>
                        </li>
                        <li style={{listStyle:'none',color:'white',marginTop:'20px'}}>
                            <Link style={{textDecoration:"none",color:'white'}} to=''>News</Link>
                        </li>
                        <li style={{listStyle:'none',color:'white',marginTop:'20px'}}>
                            <Link style={{textDecoration:"none",color:'white'}} to=''>Admition</Link>
                        </li>
                        <li style={{listStyle:'none',color:'white',marginTop:'20px'}}>
                            <Link style={{textDecoration:"none",color:'white'}} to=''>Login</Link>
                        </li>
                        
                    </ul>
                    <ul className='text-center mx-auto'>
                        <li style={{listStyle:'none',color:'white',marginTop:'20px'}}>
                            <Link style={{textDecoration:"none",color:'white'}} to=''>Event</Link>
                        </li>
                        <li style={{listStyle:'none',color:'white',marginTop:'20px'}}>
                            <Link style={{textDecoration:"none",color:'white'}} to=''>News</Link>
                        </li>
                        <li style={{listStyle:'none',color:'white',marginTop:'20px'}}>
                            <Link style={{textDecoration:"none",color:'white'}} to=''>Admition</Link>
                        </li>
                        <li style={{listStyle:'none',color:'white',marginTop:'20px'}}>
                            <Link style={{textDecoration:"none",color:'white'}} to=''>Login</Link>
                        </li>
                        
                    </ul>
                    </div>
                </Col>
                <Col md={4} className='mx-auto mt-4' style={{display:"flex",justifyContent:'center',alignItems:'center'}}>
                    <h1 style={{color:'white',padding:'20px',background:'#3DB166'}}><Link style={{textDecoration:'none',color:'white'}} to='/application'>Apply Now</Link></h1>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;