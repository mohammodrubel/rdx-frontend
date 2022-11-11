import { faGraduationCap, faUniversity, faVirus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Sponcer = () => {

    const dataSponcer = [
        {title:'UniversityLife',sideDescrption:'Overall in here',icon:faUniversity},
        {title:'Graduation',sideDescrption:'Getting Diploma',icon:faGraduationCap},
        {title:'Athletics',sideDescrption:'Sport Clubs',icon:faGraduationCap},
        {title:'Social',sideDescrption:'Overall in here',icon:faVirus},
    ]
    return (
        <Container fluid className='sponcer mx-auto'>
            <Row>
                {
                    dataSponcer.map((singleSponcer,index) => <Col 
                    key={index}
                    className='extraMargin text-center p-4 col-12 mt-2' 
                    style={{marginTop:'-100px',zIndex:'990',background:'white'}} 
                    md={3}
                    sm={6}
                    >
                        {/* <div style={{display:'flex',alignItems:'center'}}> */}
                            <FontAwesomeIcon style={{fontSize:'30px',margin:'0px 30px',color:'#3DB166'}} icon={singleSponcer.icon}/>
                            <div>
                            <h3 style={{color:'#166DB7'}}>{singleSponcer.title}</h3>
                            <h5 style={{color:'gray'}}>{singleSponcer.sideDescrption}</h5>
                            </div>
                        {/* </div> */}
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default Sponcer;