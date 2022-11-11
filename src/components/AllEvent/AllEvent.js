import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SweetPagination from "sweetpagination";
import CustomNavbar from '../Home/CustomNavbar/CustomNavbar';
import Footer from '../Home/Footer/Footer';
import './AllEvent.scss';

const AllEvent = () => {
    const [allevent,setAllEvent]=useState([])
    const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());
    useEffect(()=>{
        fetch('https://rdxuniversity.onrender.com/event')
        .then(res => res.json())
        .then(data => setAllEvent(data.result.reverse()))
    },[])

    return (
        <>
            <CustomNavbar></CustomNavbar>
                <Container fluid>
                    <Row>
                        {
                            currentPageData.map(singleevent => <Col key={singleevent?._id} md={6} lg={4} sm={12} className='col-12 mt-5 mx-auto'>

                            <Link to={`/event/${singleevent?._id}`} style={{textDecoration:'none',color:'white'}}>
                                <div className='AllEvent'>
                                    <img src={singleevent?.img} className='img-fluid' />
                                        <div style={{display:'flex',justifyContent:'space-between',background:'#3DB166',padding:'4px',color:'white'}}>
                                            <h5>{singleevent?.date}</h5>
                                            <h5>{singleevent?.time}</h5>
                                        </div>
                                    <div className='evnetContent'>
                                        <b style={{padding:'20px',fontSize:'22px'}}>
                                            {singleevent?.title}
                                        </b>
                                    </div>
                                </div>
                            </Link>

                        </Col>)
                        }
                    </Row>
                    <Row>
                        <div className='mt-5 mb-5'>
                            <SweetPagination
                                currentPageData={setCurrentPageData}
                                getData={allevent}
                                dataPerPage={6}
                            />
                        </div>
                    </Row>
                </Container>
            <Footer></Footer>
        </>
    );
};

export default AllEvent;