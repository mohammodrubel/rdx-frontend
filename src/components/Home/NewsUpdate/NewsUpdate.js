import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NewsUpdate.scss';

const NewsUpdate = () => {
    const [updateNews,setUpdateNews] = useState([])
    const [singleUpdateNews,setSingleUpdateNews] = useState([])

    useEffect(()=>{
        fetch('https://rdxuniversity.onrender.com/newsupdate')
        .then(res => res.json())
        .then(data => setUpdateNews(data.result.reverse().slice(0,5)))
    },[])

    useEffect(()=>{
        fetch('https://rdxuniversity.onrender.com/newsupdate')
        .then(res => res.json())
        .then(data => setSingleUpdateNews(data.result.reverse().slice(0,1)))
    },[])
    
    

    return (
        <Container fluid className='newsUpdate'>
            <Row>
                <Col md={8}>
                    <h2>News & Updates</h2>
                        <b>
                            <Link to='/news' style={{textDecoration:'none',color:'163269',fontSize:'14px'}}>
                                Read All News
                            </Link>
                        </b>
                    <div>
                        <Row>
                            <Col md={6}>
                                {
                                    singleUpdateNews.map((singleNews,index) => <div key={index}>
                                        <marquee>
                                            <div style={{display:'flex',justifyContent:'space-between'}}>
                                                <h6><b>Publish :</b></h6>
                                                <h6><b> Date:  {singleNews.time} </b></h6>
                                                <h6><b>Time : {singleNews.date}</b></h6>
                                            </div>
                                        </marquee>
                                        <img src={singleNews.img} className='img-fluid'/>
                                        <h4 style={{color:'#163299'}}>{singleNews.title}</h4>
                                        <p><b>Description :</b> {singleNews.description.slice(0,140)}</p>
                                    </div>)
                                }
                            </Col>
                            <Col md={6} className='mx-auto text-center'>
                                {
                                    updateNews.map((singleNewsupdate,index)=> <Link to={`/news/${singleNewsupdate._id}}`} style={{textDecoration:'none',color:'black'}} key={index}>
                                    <div
                                    key={index}
                                    style={{
                                        display:'flex',
                                        justifyContent:'space-between',
                                        gap:'25px',
                                    }}
                                    className='mt-3'
                                    
                                    >
                                        <img src={singleNewsupdate.img} className='img-fluid' style={{width:"100px"}} />
                                        <h5>{singleNewsupdate.title.slice(0,55)}</h5>
                                        
                                    </div>
                                    <hr style={{border:'5px solid #3DB166'}}></hr>
                                    </Link>)
                                }
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md={4} className='newsBackgroundSection p-5'>
                    <h3 className='mt-5 text-center'style={{color:'white'}}><FontAwesomeIcon icon={faLink}/>Quick Links</h3> <hr style={{color:'white',fontWeight:'600'}}></hr>
                    <ul className='text-center'>
                        <li style={{listStyle:'none',borderBottom:'1px solid gray',marginTop:'10px'}}><Link  style={{textDecoration:'none',color:'#3DB166',fontWeight:'600'}} to=''>Alumni & Donors</Link></li><br /> 

                        
                        <li style={{listStyle:'none',borderBottom:'1px solid gray',marginTop:'10px'}}><Link style={{textDecoration:'none',color:'#3DB166',fontWeight:'600'}} to=''>Athletic Calendar</Link></li><br /> 

                        
                        <li style={{listStyle:'none',borderBottom:'1px solid gray',marginTop:'10px'}}><Link style={{textDecoration:'none',color:'#3DB166',fontWeight:'600'}} to=''>All Kingster’s Events</Link></li><br />

                        
                        <li style={{listStyle:'none',borderBottom:'1px solid gray',marginTop:'10px'}}><Link style={{textDecoration:'none',color:'#3DB166',fontWeight:'600'}} to=''>Partnership & Out Reach</Link></li><br /> 

                        
                        <li style={{listStyle:'none',borderBottom:'1px solid gray',marginTop:'10px'}}><Link style={{textDecoration:'none',color:'#3DB166',fontWeight:'600'}} to=''>Academic Programs</Link></li><br /> 

                        
                        <li style={{listStyle:'none',borderBottom:'1px solid gray',marginTop:'10px'}}><Link style={{textDecoration:'none',color:'#3DB166',fontWeight:'600'}} to=''>Tution And Fees</Link></li> 
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default NewsUpdate;