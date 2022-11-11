import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../Authentication/FirebaseInit';
import Comments from '../../Comments/Comments';
import CustomNavbar from '../../CustomNavbar/CustomNavbar';
import Footer from '../../Footer/Footer';
import './NewsInformation.scss';

const NewsInformation = () => {
    const newsinfo = useParams()
    const singleNewsId = newsinfo.newsinfo
    const [newsUpdate,setNewsUpdate]=useState([])
    const [news,setNews]=useState([])
    const [user, loading, error] = useAuthState(auth);

    useEffect(()=>{
        fetch('https://rdxuniversity.onrender.com/newsupdate')
        .then(res => res.json())
        .then(data => setNewsUpdate(data.result.find((p)=> p._id === singleNewsId)))
    },[])

    useEffect(()=>{
        fetch('https://rdxuniversity.onrender.com/newsupdate')
        .then(res => res.json())
        .then(data => setNews(data.result.reverse().slice(0,4)))
    },[])

    

    return (
        <>
            <div className='customContainer NewsInformation'>
            <CustomNavbar></CustomNavbar>
            <Container>
                <Row>
                    <Col md={9}>
                        <div style={{
                            display:"flex",
                            justifyContent:'space-between',
                            padding:'10px',
                            background:"#192F59",
                            color:'white'
                            }}>
                            <h4>Publish Date : {newsUpdate?.date}</h4>
                            <h4> Time : {newsUpdate?.time}</h4>
                        </div>
                        <div style={{background:'#3DB166'}}>
                            <b style={{color:'white'}}><marquee>{newsUpdate?.title}</marquee></b>
                        </div>
                        <h5><b>{newsUpdate?.title}</b></h5>
                        <img src={newsUpdate?.img} className='img-fluid' />
                        <p>
                            {newsUpdate?.description}
                        </p>
                        <Comments user={user} newsinfo={newsinfo} />
                    </Col>
                    <Col md={3}>
                    <h4 style={{background:'#192F59',textAlign:'center',color:'white',padding:'12px'}}>Recent News</h4>
                        {
                            news.map(singleNewsInfo => <div key={singleNewsInfo._id} className='mx-auto mt-3'>
                                <a href={singleNewsInfo._id} target="_blank" style={{textDecoration:'none',color:'#3DB166'}}> 
                                    <img src={singleNewsInfo.img} className='img-fluid' />
                                    <h4 style={{color:'#192F59'}}>{singleNewsInfo.title.slice(0,60)}</h4>
                                </a>
                            </div>)
                        }
                    </Col>
                </Row>
            </Container>
        </div>
        <Footer></Footer>
        </>
    );
};

export default NewsInformation;