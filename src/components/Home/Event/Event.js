import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Event.scss';

const Event = () => {
    const [event,setEvent]=useState([])
    const [allEvent,setAllEvent]=useState([])

    useEffect(()=>{
        fetch('https://rdxuniversity.onrender.com/event')
        .then(res => res.json())
        .then(data => setEvent(data.result.reverse().slice(0,1)))
    },[])

    useEffect(()=>{
        fetch('https://rdxuniversity.onrender.com/event')
        .then(res => res.json())
        .then(data => setAllEvent(data.result.reverse().slice(0,3)))
    },[])

    return (
            <Container>
                <Row>
                    <Col md={4} className='mt-4'>
                        {
                            event.map(singleEvent => <div key={singleEvent._id}>
                                <marquee ><b>Publish Time : {singleEvent.time}</b></marquee>
                                <img src={singleEvent.img}  className='img-fluid' style={{borderRadius:'4px'}} />
                                <h6><b>Publish Date : {singleEvent.date}</b></h6>
                                <h4 style={{color:'#192F59'}}>{singleEvent.title.slice(0,160)}</h4>
                                <div><button className='customButton'>Join Event</button></div>
                            </div>)
                        }
                    </Col>
                    <Col md={4} className='mt-4'>
                        <h5 className='text-center'style={{color:'#3DB166',padding:'10px'}}>Upcoming Events</h5>
                        {
                            allEvent.map(resEvent => <div key={resEvent._id}>
                                <div className='mt-4'>
                                    <b>Publish Date : {resEvent.date} Time : {resEvent.time}</b>
                                <Link to={`/event/${resEvent._id}`} style={{color:'black',textDecoration:'none'}}>
                                    <div style={{display:'flex',gap:'10px'}}>
                                        <img src={resEvent.img} 
                                        className='img-fluid'
                                        style={{borderRadius:'5px',width:'100px'}}/>
                                        <p>{resEvent.title.slice(0,100)}</p>
                                    </div>
                                </Link>
                                </div>
                            </div>)
                        }
                    </Col>  
                    <Col md={4} className='subscribe mt-4' style={{borderRadius:'8px'}}>
                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                            <FontAwesomeIcon icon={faEnvelope} className='mt-4' style={{fontSize:'80px',color:'#3DB166'}} />
                            <h3 style={{color:'white'}} className='mt-4'>Subscribe To Newsletter</h3>
                            <p style={{color:'white'}} className='mt-3'>Get updates to news & events</p>
                            <form>
                                <input placeholder='Subscribe' className='form-control' />
                                <div className='text-center'><button className='mt-3 customButton'>Subscribe</button></div>
                            </form>
                        </div>
                    </Col>      
                </Row>
            </Container>
    );
};

export default Event;