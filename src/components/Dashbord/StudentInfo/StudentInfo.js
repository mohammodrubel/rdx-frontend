import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const StudentInfo = () => {
    const [studentBio,setStudentBio]=useState([])

    useEffect(()=>{
        fetch('https://rdxuniversity.onrender.com/admisstion')
        .then(res => res.json())
        .then(data => setStudentBio(data.result))
    },[])

    return (
        <Container fluid>
            <div style={{display:'flex',gap:'20px',justifyContent:'center'}}>
                <h2 className='text-center' style={{color:'#3DB166'}}>Admition </h2><h2 style={{color:'#192F59'}}>Information</h2>
            </div>
           <Row>
                {
                    studentBio.map(singleInfo => <Col md={8}>
                        <Card style={{padding:'5px'}}>
                            <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
                                <img src={singleInfo.studentPhoto} style={{width:'100px',height:'100px',borderRadius:'50%'}}/>
                                <div style={{display:'flex',flexDirection:'column'}}>
                                    <h5>{singleInfo.fullName}</h5>
                                    <span><b>{singleInfo.email}</b></span>
                                </div>
                            </div><hr/>
                            <div>
                                <Row>
                                    <Col md={6}>
                                        <p> <b> Father's Name:</b> {singleInfo.fathersName}</p>
                                        <p> <b> Mother's Name:</b> {singleInfo.fathersName}</p>
                                        <p> <b> Address:</b> {singleInfo.PresentAddress}</p>
                                        <p> <b> School Name:</b> {singleInfo.SchoolName}</p>
                                        <p> <b> Address:</b> {singleInfo.PresentAddress}</p>
                                        <p> <b> Address: </b>{singleInfo.PresentAddress}</p>
                                        <p> <b> Year: </b>{singleInfo.schoolYear}</p>
                                    </Col>
                                    <Col md={6}>
                                        <p> <b> Degree Level:</b> {singleInfo.degreeLevel}</p>
                                        <p> <b> National Id Number: </b>{singleInfo.nationalId}</p>
                                        <p> <b> Contact Number: </b>{singleInfo.contactNumber}</p>
                                        <p> <b> Birth Date:</b> {singleInfo.birthdate}</p>
                                        <p> <b> Qualification: </b>{singleInfo.qualification}</p>
                                        <p> <b> Aria:</b> {singleInfo.areaStudey}</p>
                                    </Col>
                                </Row>
                                <div style={{display:'flex'}}><button className='customButton w-50'>Accept</button><button className='customButton w-50'>Delete</button></div>
                            </div>
                        </Card>
                    </Col>)
                }
           </Row>
        </Container>
    );
};

export default StudentInfo;