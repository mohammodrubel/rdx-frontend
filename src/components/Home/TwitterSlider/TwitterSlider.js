import { faThumbTack } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './TwitterSlider.scss';

const TwitterSlider = () => {
    let settings = {
        dots: true,
        arrows:true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        pauseOnHover:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        dots: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              dots: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
      };
    const review =  [
        {name:'Mohammad Rubel',reviews:'Professor Albert joint research on mobileProfessor Albert joint research on mobile'},
        {name:'Fardin Tazbeed',reviews:'Professor AlbertAlbert joint research on mobile'},
        {name:'Mohammad Rubel',reviews:'Professor Albert joint research on mobileProfessor Albert joint research on mobile'},
        {name:'Nafis New',reviews:'Professor ert joint research on mobile'},
    ]
    return (
        <Container fluid className='p-5 twitter'>
            <Container>
              <Row>
                  <Col md={9}>
                      <Slider {...settings}>
                          {
                              review.map(singleReview => <div>
                              <div style={{display:'flex',gap:'20px',alignItems:'center'}}>
                                  <FontAwesomeIcon style={{color:'white',fontSize:'30px'}} icon={faThumbTack}/>
                                  <p style={{color:'white',fontSize:'24px'}}>{singleReview.reviews}</p>
                              </div>
                              <h6 style={{color:'#192F59',fontWeight:'700'}}>__{singleReview.name}</h6>
                              </div>)
                          }
                      </Slider>
                  </Col>
                  <Col md={3} className='apply' style={{background:'#3DB166'}}>
                      <h1 style={{margin:'20px',color:'white'}}><Link to='/application' style={{textDecoration:'none',color:'white'}}>Apply Now</Link></h1>
                  </Col>
              </Row>
            </Container>
        </Container>
    );
};

export default TwitterSlider;