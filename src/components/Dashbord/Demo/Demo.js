import React, { useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';

const Demo = () => {
    const [slider,setSlider]=useState([])
    const [teacher,setTeacher]=useState([])
    const [event,setEvent]=useState([])
    const [news,setNews]=useState([])
    const [user,setUser]=useState([])


    useState(()=>{
        fetch('https://rdxuniversity.onrender.com/slider')
        .then(res => res.json())
        .then(data => setSlider(data.result))
    },[])
    
    useState(()=>{
        fetch('https://rdxuniversity.onrender.com/teacher')
        .then(res => res.json())
        .then(data => setTeacher(data.result))
    },[])

    useState(()=>{
        fetch('https://rdxuniversity.onrender.com/event')
        .then(res => res.json())
        .then(data => setEvent(data.result))
    },[])
    
    useState(()=>{
        fetch('https://rdxuniversity.onrender.com/event')
        .then(res => res.json())
        .then(data => setNews(data.result))
    },[])

    useState(()=>{
        fetch('https://rdxuniversity.onrender.com/user')
        .then(res => res.json())
        .then(data => setUser(data.result))
    },[])


    return (
        <>
            <Container fluid >
            <Row className='g-3'>
                <Col lg={3} sm={6} className=' mx-auto text-center p-3' style={{background:'red',border:'10px solid white'}}>
                    <h1 style={{color:'white'}}> Total Slider <br/> {slider.length}</h1>
                </Col>
                <Col lg={3} sm={6} className=' mx-auto text-center p-3' style={{background:'green',border:'10px solid white'}}>
                    <h1 style={{color:'white'}}> Total Teacher <br/> {teacher.length}</h1>
                </Col>
                <Col lg={3} sm={6} className=' mx-auto text-center p-3' style={{background:'blue',border:'10px solid white'}}>
                    <h1 style={{color:'white'}}> Total Event <br/> {event.length}</h1>
                </Col>
                <Col lg={3} sm={6} className=' mx-auto text-center p-3' style={{background:'#1A73E8',border:'10px solid white'}}>
                    <h1 style={{color:'white'}}> Total News <br/> {news.length}</h1>
                </Col>
            </Row>
        </Container>

        <Container fluid>
            <Row>
                
                <Col md={8} className='mx-auto'>
                    <div><h5><h5>Website User List:</h5></h5></div>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th style={{textAlign:'center'}}>User Email</th>
                                <th style={{textAlign:'center'}}>User Role</th>
                                <th style={{textAlign:'center'}}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user.map(singleUser => <tr>
                                    <td style={{textAlign:'center'}}>{singleUser.email}</td>
                                    <td style={{textAlign:'center'}}>{singleUser.role}</td>
                                    <td style={{textAlign:'center'}}>Delete</td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default Demo;