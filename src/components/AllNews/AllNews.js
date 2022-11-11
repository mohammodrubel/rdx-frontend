import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SweetPagination from "sweetpagination";
import CustomNavbar from '../Home/CustomNavbar/CustomNavbar';
import Footer from '../Home/Footer/Footer';

const AllNews = () => {
    const [allNews,setAllNews] = useState([])
    const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());
    useEffect(()=>{
        fetch('https://rdxuniversity.onrender.com/newsupdate')
        .then(res => res.json())
        .then(data => setAllNews(data.result))
    },[])

    return (
        <>
            <CustomNavbar></CustomNavbar>
                <Container fluid>
                    <Row>
                        {
                            currentPageData.map(singleNews => <Col key={singleNews?._id} md={6} lg={4} sm={12} className='col-12 mt-5 mx-auto'>

                            <Link to={singleNews?._id} style={{textDecoration:'none',color:'white'}}>
                                <div className='AllEvent'>
                                    <img src={singleNews?.img} className='img-fluid' />
                                        <div style={{display:'flex',justifyContent:'space-between',background:'#3DB166',padding:'4px',color:'white'}}>
                                            <h5>{singleNews?.date}</h5>
                                            <h5>{singleNews?.time}</h5>
                                        </div>
                                    <div className='evnetContent'>
                                        <b style={{padding:'20px',fontSize:'22px'}}>
                                            {singleNews?.title}
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
                                getData={allNews}
                                dataPerPage={6}
                            />
                        </div>
                    </Row>
                </Container>
            <Footer></Footer>   
        </>
    );
};

export default AllNews;