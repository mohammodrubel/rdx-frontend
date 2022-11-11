import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import CustomNavbar from '../../CustomNavbar/CustomNavbar';
import Footer from '../../Footer/Footer';


const EventInformation = () => {
    const enventinfo = useParams()
    const [EventInformation,setEventInformation]=useState([])
    const [allevent,setAllEvent]=useState([])

    useEffect(()=>{
        fetch('https://rdxuniversity.onrender.com/event')
        .then(res => res.json())
        .then(data => setEventInformation(data.result.find((p)=> p._id === enventinfo.enventinfo)))
    },[])

    useEffect(()=>{
        fetch('https://rdxuniversity.onrender.com/event')
        .then(res => res.json())
        .then(data => setAllEvent(data.result.reverse().slice(0,3)))
    },[])

    return (
        <>
            <CustomNavbar></CustomNavbar>
            <Container>
            <Row>
                    <Col md={9} className='mx-auto'>
                        <div style={{
                            display:"flex",
                            justifyContent:'space-between',
                            padding:'10px',
                            background:"#192F59",
                            color:'white'
                            }}>
                            <h4>Publish Date : {EventInformation?.date}</h4> 
                            <h4> Time : {EventInformation?.time}</h4>
                        </div>
                        <div style={{background:'#3DB166'}}>
                            <b style={{color:'white'}}><marquee>{EventInformation?.title}</marquee></b>
                        </div>
                        <h5><b>{EventInformation?.title}</b></h5>
                        <img src={EventInformation?.img} className='img-fluid' />
                        <p>
                            {EventInformation?.description}
                        </p>
                    </Col>
                    <Col md={3}>
                    <h4 style={{background:'#192F59',textAlign:'center',color:'white',padding:'12px'}}>Recent Event
                    </h4>
                        {
                            allevent.map(singleEvent => <div key={singleEvent._id} className='mx-auto mt-3'>
                                <a href={singleEvent._id} target="_blank" style={{textDecoration:'none',color:'#3DB166'}}> 
                                    <img src={singleEvent.img} className='img-fluid' />
                                    <h4 style={{color:'#192F59'}}>{singleEvent.title.slice(0,60)}</h4>
                                </a>
                            </div>)
                        }
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default EventInformation;