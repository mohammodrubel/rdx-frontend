import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../../img/bnft (1).jpg';
import img2 from '../../img/bnft (2).jpg';
import img3 from '../../img/bnft (3).jpg';
import img4 from '../../img/bnft (4).jpg';
import './UniversityDevelopment.scss';
const UniversityDevelopment = () => {
    const [activePill,setActivePill]=useState(1)

    const activeTab = (index)=>{
        setActivePill(index)
        console.log(index)
    }



    return (
        <Container fluid className=' UniversityDevelopment'>
            <Row style={{display:'flex',alignItems:'center'}}>
                <Col md={2}>
                    <ul>
                        <li className={`${activePill === 1 ? ' activepill' : 'pill'}`} onClick={()=>activeTab(1)}>Benefits</li>
                        <li className={`${activePill === 2 ? ' activepill' : 'pill'}`} onClick={()=>activeTab(2)}>Self Development</li>
                        <li className={`${activePill === 3 ? ' activepill' : 'pill'}`} onClick={()=>activeTab(3)}>Spirituality</li>
                        <li className={`${activePill === 4 ? ' activepill' : 'pill'}`} onClick={()=>activeTab(4)}>Alumni</li>
                    </ul>
                </Col>
                <Col md={3} className='mx-auto'>
                    <div className='text-center'>
                        {activePill === 1 && <img src={img1} style={{width:'260px'}} />}
                        {activePill === 2 && <img src={img2} style={{width:'260px'}} />}
                        {activePill === 3 && <img src={img3} style={{width:'260px'}} />}
                        {activePill === 4 && <img src={img4} style={{width:'260px'}} />}
                    </div>
                </Col>
                <Col md={7}>
                    
                    {activePill === 1 && <div>
                        <h4 style={{color:'#3DB166'}}>
                            Benefits
                        </h4>
                        <p className='text-start' style={{color:'#192F59'}}>
                        The Kingster University Alumni Association is excited to announce the arrival of KU Alumni Connect. This is a new community building platform for Kinster’s alumni. It is the only place online where you can find, and connect with, all 90,000 Kingster’s alumni. All alumni are automatically enrolled!<br/>

                        Kingster University was established by John Smith in 1920 for the public benefit and it is recognized globally. Throughout our great history, Kingster has offered access to a wide range of academic opportunities. As a world leader in higher education, the University has pioneered change in the sector.
                        </p>
                    </div>}

                    {activePill === 2 && <div>
                        <h4 style={{color:'#3DB166'}}>
                        Self Development
                        </h4>
                        <p className='text-start' style={{color:'#192F59'}}>
                        Kingster University was established by John Smith in 1920 for the public benefit and it is recognized globally. Throughout our great history, Kingster has offered access to a wide range of academic opportunities. As a world leader in higher education, the University has pioneered change in the sector.<br/>

                        The Kingster University Alumni Association is excited to announce the arrival of KU Alumni Connect. This is a new community building platform for Kinster’s alumni. It is the only place online where you can find, and connect with, all 90,000 Kingster’s alumni. All alumni are automatically enrolled!

                        </p>
                    </div>}

                    {activePill === 3 && <div>
                        <h4 style={{color:'#3DB166'}}>
                        Spirituality
                        </h4>
                        <p className='text-start' style={{color:'#192F59'}}>
                        The Kingster University Alumni Association is excited to announce the arrival of KU Alumni Connect. This is a new community building platform enrolled!<br/><br/>

                        Kingster University was established by John Smith in 1920 for the public benefit and it is recognized globally. Throughout our great history, Kingster has offered access to a wide range of academic opportunities. As a world leader in higher education, the University has pioneered change in the sector.tform for Kinster’s alumni. It is the only place online where you can find, and connect with, all 90,000 Kingster’s alumni. All alumni are automatically
                        </p>
                    </div>}

                    {activePill === 4 && <div>
                        <h4 style={{color:'#3DB166'}}>
                        Alumni
                        </h4>
                        <p className='text-start' style={{color:'#192F59'}}>
                        The Kingster University Alumni Association is excited to announce the arrival of KU Alumni Connect. This is a new community building platform utomatically enrolled!<br/>

                        Kingster University was established by John Smith in 1920 for the public benefit and it is recognized globally. Throughout 
                        </p>
                    </div>}
                </Col>
            </Row>
        </Container>
    );
};

export default UniversityDevelopment;